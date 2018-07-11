import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
  render() {
    console.log(this.props);
    const { handleSubmit } = this.props;

    return (
      <form>
        <fieldset className="form-group">
          <label>Email</label>
          <Field
            className="form-control"
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <Field
            className="form-control"
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />

        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <Field
            className="form-control"
            name="passwordConfirm"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button className="btn btn-primary">Sign Up!</button>
      </form>
    );
  }
}

function validate(formProps) {

  const errors = {};

  if(formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }


  return errors;

}

export default reduxForm({ form: 'signup', validate})(Signup);
