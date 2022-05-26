import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import {adminDetailsData} from "./data.js"
import Button from "../components/Button.jsx";
import "../App.css";
class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uname: "",
      email: "",
      password: "",
      dob: "",
      mobileno: "",
      location: ""
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
    
    if (this.canBeSubmitted()) {
      adminDetailsData.add(
        this.state.uname,
        this.state.email,
        this.state.password,
        this.state.dob,
        this.state.mobileno,
        this.state.location
        );
      this.setState({name: e.target.value});
      this.props.history.push("/sign-in");
    }
  }
  canBeSubmitted() {
    const {
      uname,
      email,
      password,
      dob,
      mobileno,
      location
      
      
    } = this.state;
    return (
      uname.length > 4 &&
      email.length > 4 &&
      password.length > 4 &&
      dob.length > 4 &&
      mobileno.length > 4 &&
      location.length > 4 
      
    );
  }

  render() {
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
        
            
            {/*Write code here to create uname, email, dob, location, mobileno labels and inputs */}
            <label className="FormField__Label" htmlFor="uname">Username</label>
            <input className="FormField__Input" type="text" id="uname" name="uname" placeholder="Enter your username" />

            <label className="FormField__Label" htmlFor="email">E-Mail ID</label>
            <input className="FormField__Input" type="text" id="email" name="email" placeholder="Enter your email" />

            <label className="FormField__Label" htmlFor="password">Password</label>
            <input className="FormField__Input" type="password" id="password" name="password" placeholder="Enter your password" />
            
            <label className="FormField__Label" htmlFor="dob">Date of Birth</label>
            <input className="FormField__Input" type="text" id="dob" name="dob" placeholder="Enter date in format of dd/mm/yyy" />

            <label className="FormField__Label" htmlFor="mobileno">Mobile No</label>
            <input className="FormField__Input" type="text" id="mobileno" name="mobileno" placeholder="Enter Mobile Number" />

            <label className="FormField__Label" htmlFor="location">Location</label>
            <input className="FormField__Input" type="test" id="location" name="location" placeholder="Please enter the location" />
            
            <div className="FormField">
              {/* Write code here to create Register Button */}
              <Button type="submit" className="FormField__Button">Register</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;