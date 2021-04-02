import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.css";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { firstname, lastname, email, password } = this.state;
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { firstname, lastname, email, password } = this.state;
    return (
      <div class="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>

          <span>or use your email for registration</span>
          <FormInput
            type="text"
            name="firstname"
            value={firstname}
            onChange={this.handleChange}
            label="First Name"
            required
          />
          <FormInput
            type="text"
            name="lastname"
            value={lastname}
            onChange={this.handleChange}
            label="Last Name"
            required
          />
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
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
