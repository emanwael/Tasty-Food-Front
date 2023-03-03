import React, { useEffect } from "react";

import ButtonAddRemoveItem from "../../ButtonAddRemoveItem";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../../../../store/slices/cart";
import Popup from "reactjs-popup";

const MenuItem = ({ item }) => {
  const { _id, meal_name, meal_img, price, description } = item;

  const { cartItems, totalPrice, countItems } = useSelector(
    (state) => state.cartSlice
  );

  const { addToCart, removFromCart } = cartActions;

  const dispatch = useDispatch();

  const handleQuantity = () => {
    let quantity = 0;
    if (countItems !== 0) {
      const foundItemInCart = cartItems.find((item) => item._id === _id);
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  };

  useEffect(() => {
    console.log("cart", cartItems);
    console.log("total", totalPrice);
  }, []);
  return (
    <div className="item">
      <img src={meal_img} alt="food" />
      <div className="item-head_desc">
        <p className="head_desc-name">{meal_name}</p>
        <p className="head_desc-info">
          <small>{description}</small>
        </p>
        <Popup
          trigger={
            <button className=" btn-detais fw-bold">
              view detials &rarr;{" "}
            </button>
          }
          modal
          nested
        >
          {(close) => popup({ item, close })}
        </Popup>
        {/* <button className=" btn-detais">view detials &rarr; </button> */}
      </div>
      <div className="item-foot_desc">
        <span className="foot_desc-price">${price}</span>
        <ButtonAddRemoveItem
          quantity={handleQuantity()}
          handleRemoveItem={() => dispatch(removFromCart(item))}
          handleAddItem={() => dispatch(addToCart(item))}
        />
      </div>
    </div>
  );
};

export default MenuItem;

const popup = ({ item, close }) => {
  const { _id, meal_name, meal_img, price, description, food_group } = item;

  return (
    <div className=" text-center align-content-center p-3">
      <div className="row">
        <div className="col-6">
          <img src={meal_img} alt="" className=" imgg" />
        </div>
        <div className="col-6 row text-start align-content-center">
          <p className=" col-12  fs-2">{meal_name}</p>
          <p className=" col-12">{description}</p>
          <p className=" col-12">
            <span className=" fw-bold text-black">food group :</span>{" "}
            {food_group}
          </p>
          <p className=" col-12 fw-bold">${price}</p>
        </div>
      </div>
      <button
        className=" bgg text-white p-2 m-2"
        onClick={() => {
          close();
        }}
      >
        Close
      </button>
    </div>
  );
};
