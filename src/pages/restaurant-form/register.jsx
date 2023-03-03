import React, { useState, useEffect } from "react";
import "./restaurant.css";
import { addAdmin } from "../../store/slices/adminSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AdminRegister() {
  const navigate = useNavigate();

  // form update & validation
  let [formTouches, setFormTouches] = useState({
    restaurantName: false,
    email: false,
    password: false,
    phone: false,
    branchName: false,
    branchAddress: false,
    branchLocation: false,
    paymentMethods: false,
    formSubmitted: false,
  });

  let [formState, setFormState] = useState({
    restaurantName: "",
    email: "",
    password: "",
    phone: "",
    branchName: "",
    branchAddress: "",
    branchLocation: "",
    paymentMethod: [],
    valid: false,
  });

  const validateFormData = () => {
    if (
      (formState.restaurantName,
      formState.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) &&
        formState.password,
      formState.branchName,
      formState.branchAddress,
      formState.branchLocation,
      formState.paymentMethod.length > 0,
      formState.phone.match(/^[0-9]{11}$/))
    ) {
      setFormState({ ...formState, valid: true });
      setFormTouches({ ...formTouches, formSubmitted: true });
      addAdminOfForm();
    } else {
      setFormState({ ...formState, valid: false });
      setFormTouches({ ...formTouches, formSubmitted: true });
    }
  };
  const updateFormState = (e) => {
    if (e.target.name === "paymentMethod")
      setFormState({
        ...formState,
        paymentMethod: e.target.value,
      });
    else
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });

    setFormTouches({ ...formTouches, [e.target.name]: true });
  };

  // api connection setup
  const dispatch = useDispatch();
  const { AdminData, isLoading } = useSelector((store) => store.admins);

  const addAdminOfForm = () => {
    dispatch(addAdmin(formState));
  };
  useEffect(() => {
    if (AdminData._id) {
      navigate(`/admin`);
    }
  }, [AdminData]);
  return (
    <div class="restaurant_signup">
      <div class="restaurant_form">
        <div class="right_side p-5">
          <h2>Create Account</h2>
          <form
            className="restaurant_container d-grid"
            style={{
              padding: 20,
              width: "90%",
              gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
              gridGap: 20,
            }}
          >
            <div>
              <input
                placeholder="Enter Restaurant Name"
                name="restaurantName"
                className="input_form"
                onInput={updateFormState}
              />
              {formTouches.restaurantName && !formState.restaurantName && (
                <span className="input_form error d-block">
                  Restaurant name is required
                </span>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                className="input_form"
                onInput={updateFormState}
                required
              />
              {formTouches.email && !formState.email && (
                <span className="input_form error d-block">
                  Email is required
                </span>
              )}
              {formTouches.email &&
                formState.email &&
                !formState.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) && (
                  <span className="input_form error d-block">
                    Please enter a valid Email Address
                  </span>
                )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                className="input_form"
                onInput={updateFormState}
                required
              />
              {formTouches.password && !formState.password && (
                <span className="input_form error d-block">
                  Password is Required
                </span>
              )}
            </div>

            <div>
              <input
                type="tel"
                placeholder="Enter Your Mobile Phone"
                name="phone"
                className="input_form"
                onInput={updateFormState}
              />
              {formTouches.phone && !formState.phone && (
                <span className="input_form error d-block">
                  Mobile Number is Required
                </span>
              )}
              {formTouches.phone &&
                formState.phone &&
                !formState.phone.match(/^[0-9]{11}$/) && (
                  <span className="input_form error d-block">
                    Please Enter a valid Mobile Number
                  </span>
                )}
            </div>

            <div>
              <input
                type="text"
                placeholder="First Branche Name "
                name="branchName"
                className="input_form"
                onInput={updateFormState}
              />
              {formTouches.branchName && !formState.branchName && (
                <span className="input_form error d-block ">
                  {" "}
                  Branch name is Required{" "}
                </span>
              )}
            </div>

            <div>
              <input
                type="address"
                placeholder="First Branch Address"
                name="branchAddress"
                className="input_form"
                onInput={updateFormState}
              />
              {formTouches.branchAddress && !formState.branchAddress && (
                <span className="input_form error d-block ">
                  {" "}
                  Branch address is Required{" "}
                </span>
              )}
            </div>

            <div>
              <input
                type="location"
                placeholder="First Branch Location"
                name="branchLocation"
                className="input_form"
                onInput={updateFormState}
              />
              {formTouches.branchLocation && !formState.branchLocation && (
                <span className="input_form error d-block ">
                  {" "}
                  Branch location is Required{" "}
                </span>
              )}
            </div>

            <span className="input_form">
              <input
                type="checkbox"
                id="payment1"
                name="paymentMethod"
                value="cash"
              />
              <label for="payment1"> Cash</label>
              <input
                type="checkbox"
                id="payment2"
                name="paymentMethod"
                value="visa"
              />
              <label for="payment2"> Visa </label>
            </span>
            <br></br>
          </form>
          <button className="button sign-button" onClick={validateFormData}>
            Sign UP
          </button>
          {formTouches.formSubmitted && !formState.valid && (
            <span className="error-message input_form d-block">
              Please Fill all the fields
            </span>
          )}
          {formTouches.formSubmitted &&
            formState.valid &&
            !AdminData._id &&
            !isLoading && (
              <span className="error input-block">
                the email address is already in use
              </span>
            )}
          {formTouches.formSubmitted &&
            formState.valid &&
            !AdminData._id &&
            isLoading && (
              <span className="error input-block">Loading ... </span>
            )}
          <p className=" p">
            Already have an account?
            <a href="/admin-login" className="fw-bold">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
