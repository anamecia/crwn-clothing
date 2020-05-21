import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButtom from "../custom-button/custom-button.component";

import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            label="email"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            label="password"
            required
            hanldeChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButtom type="submit" > Sign In </CustomButtom>
            <CustomButtom onClick = {signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButtom>
          </div>
          

        </form>
      </div>
    );
  }
}

export default SignIn;
