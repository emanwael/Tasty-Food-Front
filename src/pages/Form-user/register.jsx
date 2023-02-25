import React, { useState } from "react";
import { addCustomer } from "../../store/slices/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import "./form.css";

export default function Register() {
  // form update & validation
  let [formTouches, setFormTouches] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    address: false,
    phone: false,
    formSubmitted: false,
  });

  let [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    valid: false,
  });

  const validateFormData = () => {
    if (
      (formState.firstName,
      formState.lastName,
      formState.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) &&
        formState.password,
      formState.address,
      formState.phone.match(/^[0-9]{11}$/))
    ) {
      setFormState({ ...formState, valid: true });
      setFormTouches({ ...formTouches, formSubmitted: true });
      addCustomerOfForm();
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
  const addCustomerOfForm = () => {
    let newCustomer = {
      customer_name: `${formState.firstName} ${formState.lastName}`,
      address: formState.address,
      phone_number: formState.phone,
      email: formState.email,
      password: formState.password,
    };
    dispatch(addCustomer(newCustomer));
  };

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
          <div className="right">
            <form className="form_container">
              <h2>Create Account</h2>
              <input
                placeholder="Enter Your First Name"
                name="firstName"
                className="input"
                onInput={updateFormState}
              />
              {formTouches.firstName && !formState.firstName && (
                <p className="error-msg">first name is required</p>
              )}

              <input
                type="text"
                placeholder="Enter Your Last Name"
                name="lastName"
                className="input"
                onInput={updateFormState}
              />
              {formTouches.lastName && !formState.lastName && (
                <p className="error-msg">last name is required</p>
              )}
              <input
                type="text"
                placeholder="Enter Your Email"
                name="email"
                className="input"
                onInput={updateFormState}
              />
              {formTouches.email && !formState.email && (
                <p className="error-msg">email is required</p>
              )}
              {formTouches.email &&
                formState.email &&
                !formState.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) && (
                  <p className="error-msg">
                    please enter a valid email address
                  </p>
                )}
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                className="input"
                onInput={updateFormState}
              />
              {formTouches.password && !formState.password && (
                <p className="error-msg">password is required</p>
              )}
              <input
                type="address"
                placeholder="Enter Your Address"
                name="address"
                className="input"
                onInput={updateFormState}
              />
              {formTouches.address && !formState.address && (
                <p className="error-msg">address is required</p>
              )}
              <input
                type="tel"
                placeholder="Enter Your Mobile Phone"
                name="phone"
                className="input"
                onInput={updateFormState}
              />
              {formTouches.phone && !formState.phone && (
                <p className="error-msg">mobile number is required</p>
              )}
              {formTouches.phone &&
                formState.phone &&
                !formState.phone.match(/^[0-9]{11}$/) && (
                  <p className="error-msg">
                    please enter a valid mobile number
                  </p>
                )}
            </form>
            <button className="btn sign-btn" onClick={validateFormData}>
              Sign UP
            </button>
            {formTouches.formSubmitted && !formState.valid && (
              <p className="error-msg"> please fill all the fields</p>
            )}
            <p className="text-dark p-0">
              Already have an account?&nbsp;
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
