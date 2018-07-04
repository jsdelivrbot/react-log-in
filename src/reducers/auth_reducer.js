import {
  AUTH_USER,
  UNAUTH_USER,
  ERROR_USER
} from '../actions/types';

export default function (state = {}, action) {

  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case ERROR_USER:
      return { ...state, error: action.payload }
  }

  return state;
}
