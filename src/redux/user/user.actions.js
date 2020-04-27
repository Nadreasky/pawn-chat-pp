import UserActionTypes from './user.types';

// SIGN UP WITH EMAIL
export const emailSignUpRequest = userCredential => {
  return {
    type: UserActionTypes.EMAIL_SIGN_UP_REQUEST,
    payload: userCredential
  };
}

export const emailSignUpSuccess = ({ user, additionalData }) => {
  return {
    type: UserActionTypes.EMAIL_SIGN_UP_SUCCESS,
    payload: { user, additionalData }
  };
}

export const emailSignUpFailure = error => {
  return {
    type: UserActionTypes.EMAIL_SIGN_UP_FAILURE,
    payload: error
  };
}
// END SIGN UP WITH EMAIL

// LOGIN WITH EMAIL
export const userLoginRequest = userCredential => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_REQUEST,
    payload: userCredential
  };
}

export const userLoginSuccess = user => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: user
  };
}

export const userLoginFailure = error => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload: error
  };
}
// END LOGIN WITH EMAIL

// SIGN OUT
export const signOutRequest = () => {
  return {
    type: UserActionTypes.SIGN_OUT_REQUEST,
  };
}

export const signOutSuccess = () => {
  return {
    type: UserActionTypes.SIGN_OUT_SUCCESS,
  };
}

export const signOutFailure = error => {
  return {
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
  };
}
// END SIGN OUT