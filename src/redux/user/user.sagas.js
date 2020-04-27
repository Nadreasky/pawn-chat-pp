import { takeLatest, call, put, all } from 'redux-saga/effects'

import UserActionTypes from './user.types';
import {
  emailSignUpSuccess,
  emailSignUpFailure,
  userLoginSuccess,
  userLoginFailure
} from './user.actions';

import {
  auth,
  createUserProfileDocument
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
    yield put(userLoginSuccess({
      id: userSnapshot.id,
      ...userSnapshot.data()
    }));
  } catch (error) {
    yield put(userLoginFailure(error.message));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}
// End Effect Functions

// Listen on Redux Actions
export function* onEmailSignUpRequest() {
  yield takeLatest(
    UserActionTypes.EMAIL_SIGN_UP_REQUEST,
    signUp
  )
}

export function* onEmailSignUpSuccess() {
  yield takeLatest(
    UserActionTypes.EMAIL_SIGN_UP_SUCCESS,
    signInAfterSignUp
  )
}
// End

export function* userSagas() {
  yield all([
    call(onEmailSignUpRequest),
    call(onEmailSignUpSuccess),
  ]);
}