import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.css";
class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div class="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
