import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UserActionTypes.EMAIL_SIGN_UP_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case UserActionTypes.EMAIL_SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload,
        error: null
      }
    case UserActionTypes.EMAIL_SIGN_UP_FAILURE:
      return {
        ...state,
        isLoading: false,
        currentUser: null,
        error: action.payload
      }
    case UserActionTypes.EMAIL_SIGN_IN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload,
        error: null
      }
    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        currentUser: null,
        error: action.payload
      }
    case UserActionTypes.SIGN_OUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: null,
        error: null
      }
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default userReducer;
