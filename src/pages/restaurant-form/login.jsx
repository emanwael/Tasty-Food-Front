import React, { useState, useEffect } from "react";
import "./restaurant.css";
import { signAdminIn } from "../../store/slices/adminSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
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

      signInAdminOfForm();
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
  const { AdminData, isLoading } = useSelector((store) => store.admins);
  const signInAdminOfForm = () => {
    dispatch(signAdminIn(formState));
  };

  useEffect(() => {
    if (AdminData._id) {
      navigate(`/admin`);
    }
  }, [AdminData]);

  return (
    <div className="restaurant_signup">
      <div className="restaurant_form">
        <div className="right_side">
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
              <span className="input_form error d-block">
                {" "}
                Email is Required{" "}
              </span>
            )}
            {formTouches.email &&
              formState.email &&
              !formState.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) && (
                <span className="input_form error d-block">
                  {" "}
                  please enter a valid email address{" "}
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
              <span className="input_form error d-block">
                {" "}
                Password is Required{" "}
              </span>
            )}
          </form>
          <button className="button sign-button" onClick={validateFormData}>
            Sign In
          </button>
          {formTouches.formSubmitted && !formState.valid && (
            <span className="input_form error d-block">
              {" "}
              please fill all the fields{" "}
            </span>
          )}
          {formTouches.formSubmitted &&
            formState.valid &&
            !AdminData._id &&
            !isLoading && (
              <span className="error input-block">
                Login Failed: Your email or password is incorrect
              </span>
            )}
          {formTouches.formSubmitted &&
            formState.valid &&
            !AdminData._id &&
            isLoading && (
              <span className="error input-block">Loading ... </span>
            )}
          <p className="p-3 p">
            Have no account yet?
            <a href="/admin-register" className="fw-bold">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
