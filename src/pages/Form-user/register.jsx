import React from "react";
import "./form.css";
export default function Register() {
  return (
    <div>
      <div className="signup_container">
        <div className="signup_form">
          <div className="left">
            <h2>Welcome</h2>
            <a>
              <button type="button" className="btn text-white">
                {" "}
                Sign In
              </button>
            </a>
          </div>
          <div class="right">
            <form className="form_container">
              <h2>Create Account</h2>
              <input
                placeholder="Enter Your First Name"
                name="firstName"
                className="input"
                required
              />

              <input
                type="text"
                placeholder="Enter Your Last Name"
                name="lastName"
                className="input"
                required
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                className="input"
                required
              />
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                className="input"
                required
              />
              <input
                type="address"
                placeholder="Enter Your Address"
                name="adderss"
                className="input"
                required
              />
              <input
                type="tel"
                placeholder="Enter Your Mobile Phone"
                name="telephone"
                className="input"
                required
              />
              <button type="submit" className="btn sign-btn ">
                Sign UP
              </button>
            </form>
            <p className="text-dark p-0">
              Already have an account?
              <a href="#" className="fw-bold ">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
