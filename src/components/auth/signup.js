import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {

  render() {
    const { handleSubmit } = this.props;
    return(
      <form>
        <fieldset className="form-group">
          <label>Email</label>
          <Field className="form-control" name="email"
            component="input" type="text" />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field className="form-control" name="password"
            component="input" type="password" />
        </fieldset>
        <fieldset>
          <label>Confirm Password</label>
          <Field className="form-control" name="passwordConfirm"
            component="input" type="password" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign up</button>
      </form>
    );
  }
}

export default reduxForm({
   form: 'signup'
})(Signup);
