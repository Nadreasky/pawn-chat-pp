import { takeLatest, call, put, all } from 'redux-saga/effects'

import UserActionTypes from './user.types';
import {
  emailSignUpSuccess,
  emailSignUpFailure,
  signInSuccess,
  signInFailure,
} from './user.actions';

import {
  auth,
  createUserProfileDocument,
  getCurrentUser
} from '../../firebase/firebase.utils';

// Effect functions
export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(emailSignUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(emailSignUpFailure(error.message));
  }
}

export function* getSnapshotFromUserAuth(user, additionalData = null) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({
      id: userSnapshot.id,
      ...userSnapshot.data()
    }));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* signInWithEmail({ payload: { email, password} }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}
// End Effect Functions

// Listen on Redux Actions
export function* onEmailSignUpRequest() {
  yield takeLatest(
    UserActionTypes.EMAIL_SIGN_UP_REQUEST,
    signUp
  );
}

export function* onEmailSignUpSuccess() {
  yield takeLatest(
    UserActionTypes.EMAIL_SIGN_UP_SUCCESS,
    signInAfterSignUp
  );
}

export function* onSignInRequest() {
  yield takeLatest(
    UserActionTypes.EMAIL_SIGN_IN_REQUEST,
    signInWithEmail
  );
}

export function* onCheckUserSession() {
  yield takeLatest(
    UserActionTypes.CHECK_USER_SESSION,
    isUserAuthenticated
  )
}
// End

export function* userSagas() {
  yield all([
    call(onEmailSignUpRequest),
    call(onEmailSignUpSuccess),
    call(onSignInRequest),
  ]);
}