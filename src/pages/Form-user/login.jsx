import React from "react";
import "./form.css";
export default function Login() {
  return (
    <div>
      <div className="signup_container">
        <div className="signup_form">
          <div className="right">
            <form className="form_container">
              <h2>Login</h2>
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
              <button type="submit" className="btn sign-btn">
                Sign In
              </button>
            </form>
            <p className="text-dark p-0">
              have no account yet?
              <a href="#" className="fw-bold">
                Sign Up
              </a>
            </p>
          </div>

          <div class="left">
            <h2>Welcome</h2>
            <a>
              <button type="button" className="btn text-white">
                {" "}
                Sign Up
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
