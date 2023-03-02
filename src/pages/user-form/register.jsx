import React, { useState, useEffect } from "react";
import { addCustomer } from "../../store/slices/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import "./user.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

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
  const { customerData } = useSelector((store) => store.customers);
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
  useEffect(() => {
    if (customerData._id) {
      navigate("/home");
    }
  }, [customerData]);
  return (
    <div>
      <div className="signup_container">
        <div className="signup_form">
          <div className="left">
            <h2>Welcome</h2>
            <a>
              <button
                type="button"
                className="btn text-white"
                onClick={() => {
                  navigate("/customer-login");
                }}
              >
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
                <span className="error-message input d-block">
                  First name is required
                </span>
              )}

              <input
                type="text"
                placeholder="Enter Your Last Name"
                name="lastName"
                className="input"
                onInput={updateFormState}
              />
              {formTouches.lastName && !formState.lastName && (
                <span className="error-message input d-block">
                  Last name is required
                </span>
              )}
              <input
                type="text"
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
                    Please enter a valid Email Address
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
              <input
                type="address"
                placeholder="Enter Your Address"
                name="address"
                className="input"
                onInput={updateFormState}
              />
              {formTouches.address && !formState.address && (
                <span className="error-message input d-block">
                  Address is Required
                </span>
              )}
              <input
                type="tel"
                placeholder="Enter Your Mobile Phone"
                name="phone"
                className="input"
                onInput={updateFormState}
              />
              {formTouches.phone && !formState.phone && (
                <span className="error-message input d-block">
                  Mobile Number is Required
                </span>
              )}
              {formTouches.phone &&
                formState.phone &&
                !formState.phone.match(/^[0-9]{11}$/) && (
                  <span className="error-message input d-block">
                    Please Enter a valid Mobile Number
                  </span>
                )}
            </form>
            <button className="btn sign-btn" onClick={validateFormData}>
              Sign UP
            </button>
            {formTouches.formSubmitted && !formState.valid && (
              <span className="error-message input d-block">
                Please Fill all the fields
              </span>
            )}
            {formTouches.formSubmitted &&
              formState.valid &&
              !customerData._id && (
                <span className="error-message input d-block">
                  that email address is already in use
                </span>
              )}
            <p className="text-dark p-0">
              Already have an account?&nbsp;
              <a href="/customer-login" className="fw-bold ">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
