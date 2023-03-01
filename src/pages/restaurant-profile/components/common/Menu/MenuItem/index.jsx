import React, { useEffect } from "react";

import ButtonAddRemoveItem from "../../ButtonAddRemoveItem";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../../../../store/slices/cart";

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
