import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./restaurant.css";

export default function AdminLogin() {
  // form update & validation
  let [formTouches, setFormTouches] = useState({
    email: false,
    password: false,
    formSubmitted: false,
  });

  let [formState, setFormState] = useState({
    email: "",
    password: "",
    valid: false,
  });

  const validateFormData = () => {
    if (
      formState.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) &&
      formState.password
    ) {
      setFormState({ ...formState, valid: true });
      setFormTouches({ ...formTouches, formSubmitted: true });

      //////////TODO --> Admin Login Function
      // signInCustomerOfForm();

      //TODO --> navigate to restaurant dashboard
    } else {
      setFormState({ ...formState, valid: false });
      setFormTouches({ ...formTouches, formSubmitted: true });
    }
  };

  const updateFormState = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    setFormTouches({ ...formTouches, [e.target.name]: true });
  };
  // api connection setup
  const dispatch = useDispatch();
  const signInCustomerOfForm = () => {
    let customer = {
      email: formState.email,
      password: formState.password,
    };
    // dispatch(signCustomerIn(customer));
  };

  return (
    <div className="restaurant_signup">
      <div className="restaurant_form">
        <div className="right_side" style={{ width: 700 }}>
          <form className="restaurant_container">
            <h2>Welcome Back</h2>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              className="input_form d-block m-4"
              onInput={updateFormState}
            />
            {formTouches.email && !formState.email && (
              <span className="error-message input d-block">
                Email is required
              </span>
            )}
            {formTouches.email &&
              formState.email &&
              !formState.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) && (
                <span className="error-message input_form d-block">
                  please enter a valid email address
                </span>
              )}
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              className="input_form d-block m-4"
              onInput={updateFormState}
            />
            {formTouches.password && !formState.password && (
              <span className="error-message input d-block">
                Password is Required
              </span>
            )}
          </form>
          <button className="button sign-button" onClick={validateFormData}>
            Sign In
          </button>
          {formTouches.formSubmitted && !formState.valid && (
            <span className="error-message input d-block">
              please fill all the fields
            </span>
          )}
          <p className="p-3">
            Have no account yet?
            <a href="#" className="fw-bold">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
