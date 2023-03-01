import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import EmptyCart from "../components/Cart/EmptyCart";
import Logo from "../components/common/Logo";
import Menu from "../components/common/Menu";
import "./styles.css";
import MyNavbar from "../../Home/Navbar/myNavbar";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, totalPrice } = useSelector((state) => state.cartSlice);

  return (
    <>
      <MyNavbar />
      <div className=" containerr">
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="orders">
            <h1 className="orders-heading">Your Orders</h1>
            <div className="orders-menu">
              <Menu list={cartItems} />
            </div>
            <h3 className="orders-total">Your Total ${totalPrice}</h3>
            <button onClick={() => navigate("/payment")}>
              Pay Now<i className="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
