import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { adminDetailsData } from "./data.js";
import "../App.css";
import Button from "../components/Button.jsx";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      adminDetails: adminDetailsData.getData()
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    const { adminDetails } = this.state;


    let validCredentials = false;
    if (this.canBeSubmitted()) {
      adminDetails.map((admin) => {


        if (this.state.email === admin.email && this.state.password === admin.password) {
          let currentUser = admin.adminId;
          validCredentials = true
          adminDetailsData.setCurrentUser(admin.adminId);
          this.props.history.push("/allpatients");
          return
        }


      })
      if (!validCredentials) {
        alert("please enter valid credentials")
        this.props.history.push("/sign-in");
      }
    }

  }
  canBeSubmitted() {
    const { email, password, adminDetails } = this.state;
    return email.length > 0 && password.length > 0;
  }

  render() {
    const isEnabled = this.canBeSubmitted();

    return (
      <div>
        <div>
          <h3 style={{ textAlign: "center", paddingBottom: "10px" }}>
            Digital Medical Record Database
          </h3>
        </div>
        <div className="FormCenter">
          <div className="FormTitle">
            <NavLink to="/sign-in" className="FormTitle__Link">
              Login
            </NavLink>{" "}
            or
            <NavLink exact to="/" className="FormTitle__Link">
              Register
            </NavLink>
          </div>

          <form onSubmit={this.handleSubmit} className="FormFields">
            {/*Write code here to create labels and fields for username and password */}
            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
            <input className="FormField__Input" type="text" id="email" name="email" placeholder="Enter your email" />

            <label className="FormField__Label" htmlFor="password">Password</label>
            <input className="FormField__Input" type="password" id="password" name="password" placeholder="Enter your password" />
            <div className="FormField">
              {/* Write code here to create a login button */}

              <Button type="submit" className="FormField__Button">Login</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignInForm;