import React, { useState } from "react";
import "./restaurant.css";
import { useDispatch } from "react-redux";
export default function AdminRegister() {
  // form update & validation
  let [formTouches, setFormTouches] = useState({
    restaurantName: false,
    email: false,
    password: false,
    phone: false,
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
      formState.branchAddress,
      formState.branchLocation,
      formState.paymentMethod.length > 0,
      formState.phone.match(/^[0-9]{11}$/))
    ) {
      setFormState({ ...formState, valid: true });
      setFormTouches({ ...formTouches, formSubmitted: true });
      // addCustomerOfForm();
      //TODO --> navigate to restaurant dashboard
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
  // const dispatch = useDispatch();
  // const addCustomerOfForm = () => {
  //   let newCustomer = {
  //     customer_name: `${formState.firstName} ${formState.lastName}`,
  //     address: formState.address,
  //     phone_number: formState.phone,
  //     email: formState.email,
  //     password: formState.password,
  //   };
  //   // dispatch(addCustomer(newCustomer));
  // };
  return (
    <div class="restaurant_signup">
      <div class="restaurant_form">
        <div class="right_side">
          <form className="restaurant_container">
            <h2>Create Account</h2>
            <input
              placeholder="Enter Restaurant Name"
              name="restaurantName"
              className="input_form"
              onInput={updateFormState}
            />
            {formTouches.restaurantName && !formState.restaurantName && (
              <span className="err-message input_form d-block">
                Restaurant name is required
              </span>
            )}
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              className="input_form"
              onInput={updateFormState}
              required
            />
            {formTouches.email && !formState.email && (
              <span className="err-message input_form d-block">
                Email is required
              </span>
            )}
            {formTouches.email &&
              formState.email &&
              !formState.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) && (
                <span className="err-message input_form d-block">
                  Please enter a valid Email Address
                </span>
              )}
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              className="input_form"
              onInput={updateFormState}
              required
            />
            {formTouches.password && !formState.password && (
              <span className="err-message input_form d-block">
                Password is Required
              </span>
            )}
            <input
              type="tel"
              placeholder="Enter Your Mobile Phone"
              name="phone"
              className="input_form"
              onInput={updateFormState}
            />
            {formTouches.phone && !formState.phone && (
              <span className="err-message input_form d-block">
                Mobile Number is Required
              </span>
            )}
            {formTouches.phone &&
              formState.phone &&
              !formState.phone.match(/^[0-9]{11}$/) && (
                <span className="err-message input_form d-block">
                  Please Enter a valid Mobile Number
                </span>
              )}
            <input
              type="address"
              placeholder="First Branch Address"
              name="branchAddress"
              className="input_form"
              onInput={updateFormState}
            />
            {formTouches.branchAddress && !formState.branchAddress && (
              <span className="err-message input_form d-block">
                Branch address is Required
              </span>
            )}
            <input
              type="location"
              placeholder="First Branch Location"
              name="branchLocation"
              className="input_form"
              onInput={updateFormState}
            />
            {formTouches.branchLocation && !formState.branchLocation && (
              <span className="err-message input_form d-block">
                Branch location is Required
              </span>
            )}
            <input
              type="number"
              placeholder="Delivery Time"
              name="number"
              className="input_form"
              // onInput={updateFormState}
            />
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
          <p>
            Already have an account?
            <a href="#" className="fw-bold">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
