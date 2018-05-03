import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {

    // Submit to server
    axios.post(`${ROOT_URL}/signin`, { email, password });

    // if good
    // - update state to indicate user
    // - save jwt token
    // - redirect to the route '/feature'

    //If request is bad...

    //- Show error
  }



}
