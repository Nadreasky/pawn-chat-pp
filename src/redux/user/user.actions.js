import UserActionTypes from './user.types';

// SIGN UP WITH EMAIL
export const emailSignUpRequest = userCredentials => {
  return {
    type: UserActionTypes.EMAIL_SIGN_UP_REQUEST,
    payload: userCredentials
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

// SIGN IN SECTION
// ---SIGN IN WITH EMAIL
export const emailSignInRequest = userCredentials => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_REQUEST,
    payload: userCredentials
  };
}

export const signInSuccess = user => {
  return {
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
  };
}

export const signInFailure = error => {
  return {
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
  };
}
// END SIGN IN SECTION

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

// CHECK USER SESSION
export const checkUserSession = () => {
  return {
    type: UserActionTypes.CHECK_USER_SESSION,
  };
}
// END CHECK USER SESSION