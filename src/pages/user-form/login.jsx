import React, { useState } from "react";
import { signCustomerIn } from "../../store/slices/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import "./user.css";
export default function CustomerLogin() {
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

      //////////TODO --> USER Login Function
      signInCustomerOfForm();

      //TODO --> navigate to customers home page
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
    dispatch(signCustomerIn(customer));
  };

  return (
    <div>
      <div className="signup_container">
        <div className="signup_form">
          <div className="left">
            <h2>Welcome</h2>
            <a>
              <button className="btn text-white"> Sign Up</button>
            </a>
          </div>

          <div className="right">
            <form className="form_container">
              <h2>Login</h2>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                className="input"
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
                  <span className="error-message input d-block">
                    please enter a valid email address
                  </span>
                )}
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                className="input"
                onInput={updateFormState}
              />
              {formTouches.password && !formState.password && (
                <span className="error-message input d-block">
                  Password is Required
                </span>
              )}
            </form>
            <button className="btn sign-btn" onClick={validateFormData}>
              Sign In
            </button>
            {formTouches.formSubmitted && !formState.valid && (
              <span className="error-message input d-block">
                please fill all the fields
              </span>
            )}
            <p className="text-dark p-0">
              Have no account yet?&nbsp;
              <a href="#" className="fw-bold">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
