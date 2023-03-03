import React, { useEffect, useState } from "react";
import "../payment/payment.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/slices/cart";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigator = useNavigate();
  const { customerData } = useSelector((state) => state.customers);
  const { customer_name, phone_number, address } = customerData;

  const { cartItems, totalPrice } = useSelector((state) => state.cartSlice);
  const { clearItemsCart } = cartActions;
  const dispatch = useDispatch();

  const stripe = useStripe();
  const element = useElements();

  const [isProcessing, setProcessing] = useState(false);
  const [Error, setError] = useState("");
  const [Success, setSuccess] = useState("pay");

  const [credentials, setCredentials] = useState({
    name: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    setCredentials({
      name: customer_name,
      phone: phone_number,
      address,
    });
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
    // console.log(credentials);
  };

  const handleCardChange = (e) => {
    if (e.error) {
      console.log("erorrrrrrrrrr", e.error);
      return setError(e.error.message);
    }
    setError("");
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setSuccess("Processing...");

    const cardElement = element.getElement("card");
    const { name, phone, address } = credentials;
    const billingInfo = {
      name,
      phone,
      address: {
        line1: address,
      },
    };

    try {
      const paymentIntent = await axios.post("http://localhost:5100/payments", {
        amount: totalPrice * 100,
      });

      const paymentMethodObj = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingInfo,
      });

      if (paymentMethodObj.error) {
        console.log("(paymentMethodObj error", paymentMethodObj.error);

        setError(paymentMethodObj.error.message);
        setProcessing(false);
        setSuccess("Pay");
        return;
      }

      const confirmedPayment = await stripe.confirmCardPayment(
        paymentIntent.data,
        {
          payment_method: paymentMethodObj.paymentMethod.id,
        }
      );
      if (confirmedPayment.error) {
        console.log("confirm error", confirmedPayment.error);
        setError(confirmedPayment.error.message);
        setProcessing(false);
        setSuccess("Pay");
        return;
      }

      setSuccess("Success! Payment is Complete");
      setTimeout(() => {
        setSuccess("Pay");
        setProcessing(false);
        setCredentials({
          name: "",
          email: "",
          phone: "",
          address: "",
        });
        cardElement.clear();
        dispatch(clearItemsCart());
        navigator("/home");
      }, 5000);
    } catch (error) {
      console.log("error", error);
      setError(error.message);
      setProcessing(false);
      setSuccess("Pay");
    }
  };

  return (
    <div>
      <div className="container payment">
        <form action="" onSubmit={handlePayment}>
          <div className="row ">
            <div className="col">
              <h3 className="title">billing address</h3>

              <div className="inputBox">
                <span>full name :</span>
                <input
                  type="text"
                  placeholder="enter your name"
                  name="name"
                  value={credentials.name}
                  onChange={handleChange}
                />
              </div>
              <div className="inputBox">
                <span>phone :</span>
                <input
                  type="phone"
                  placeholder="+201093798955"
                  name="phone"
                  value={credentials.phone}
                  onChange={handleChange}
                />
              </div>
              {/* <div className="inputBox">
                <span>email :</span>
                <input type="email" placeholder="example@example.com" />
              </div> */}

              {/* <div className="inputBox">
                <span>city :</span>
                <input type="text" placeholder="Cairo" />
              </div> */}
              {/* 
              <div className="flex">
                <div className="inputBox">
                  <span>state :</span>
                  <input type="text" placeholder="Egypt" />
                </div>
                <div className="inputBox">
                  <span>zip code :</span>
                  <input type="text" placeholder="123" />
                </div>
              </div> */}
            </div>

            <div className="col">
              <h3 className="title">payment</h3>

              <div className="inputBox">
                <span>cards accepted :</span>
                <img
                  src="https://w7.pngwing.com/pngs/32/363/png-transparent-visa-master-card-and-american-express-mastercard-payment-visa-credit-card-emv-credit-card-visa-and-master-card-background-text-display-advertising-logo-thumbnail.png"
                  alt=""
                />
              </div>
              <div className="inputBox">
                <span>address :</span>
                <input
                  type="text"
                  placeholder="room - street - locality"
                  name="address"
                  value={credentials.address}
                  onChange={handleChange}
                />
              </div>
              {/* <div className="inputBox">
                <span>name on card :</span>
                <input type="text" placeholder="mr. john henry" />
              </div>
              <div className="inputBox">
                <span>credit card number :</span>
                <input type="number" placeholder="1111-2222-3333-4444" />
              </div>
              <div className="inputBox">
                <span>exp month :</span>
                <input type="text" placeholder="january" />
              </div>

              <div className="flex">
                <div className="inputBox">
                  <span>exp year :</span>
                  <input type="number" placeholder="2024" />
                </div>
                <div className="inputBox">
                  <span>CVV :</span>
                  <input type="text" placeholder="1234" />
                </div>
              </div> */}
            </div>
          </div>

          <CardElement
            options={{
              hidePostalCode: true,

              style: {
                base: {
                  fontSize: "20px",
                },
                invalid: {
                  color: "red",
                },
              },
            }}
            onChange={handleCardChange}
          />

          <h3 className="orders-total">Your Total ${totalPrice}</h3>

          <Popup
            trigger={
              <button
                type="submit"
                className="submit-btn"
                disabled={isProcessing}
              >
                {Success}
              </button>
            }
            modal
            nested
          >
            {(close) => popup({ Success, isProcessing, Error, close })}
          </Popup>
          {/* <button type="submit" className="submit-btn" disabled={isProcessing}>
            {Success}
          </button> */}
        </form>
      </div>
    </div>
  );
}

const popup = ({ Success, isProcessing, Error, close }) => {
  console.log(Success);
  return (
    <div className=" text-center align-content-center p-5">
      {Success == "Success! Payment is Complete" && (
        <i class="fa-solid fa-circle-check iconss text-success"></i>
      )}

      {Error && (
        <i class="fa-solid fa-circle-exclamation iconss text-danger"></i>
      )}
      {/* {isProcessing == true && <i class="fa-solid fa-arrows-rotate iconss"></i>} */}
      <div className="m-3">
        <p className=" error">{Error}</p>
        {!Error && Success}
      </div>
      <div>
        <button
          className=" bgg text-white p-2 m-2"
          onClick={() => {
            close();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};
