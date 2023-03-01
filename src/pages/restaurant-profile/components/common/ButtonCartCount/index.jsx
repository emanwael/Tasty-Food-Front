import React from "react";
import { useSelector } from "react-redux";
// import { useHistory } from "react-router";
import { useNavigate } from "react-router";
import "./styles.css";

const ButtonCartCount = () => {
  // const history = useHistory();

  const navigate = useNavigate();

  const { countItems } = useSelector((state) => state.cartSlice);

  return (
    <div
      className="btnCartCount"
      onClick={
        () => navigate("/cart")
        // history.push("/cart")
      }
    >
      <div className="count">{countItems >= 100 ? "99+" : countItems}</div>
      <i className="fas fa-shopping-cart"></i>
    </div>
  );
};

export default ButtonCartCount;
