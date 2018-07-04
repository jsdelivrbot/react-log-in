import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, ERROR_USER } from './types.js';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {

    // Submit to server
    axios.post(`${ROOT_URL}/signin`, { email, password })
    .then((response) => {
      // if good
      // - update state to indicate user
      dispatch({ type: AUTH_USER });
      // - save jwt token
      localStorage.setItem('token', response.data.token);
      // - redirect to the route '/feature'
      browserHistory.push('/feature');
    })
    .catch((err) => {
      //If request is bad...
      //- Show error
      dispatch(authError('Bad Login Info'));
    })
  };
}

export function authError(error) {

  return {
    type: ERROR_USER,
    payload: error
  };
}

export function signoutUser() {

  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}
