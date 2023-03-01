import React from "react";
import { useNavigate } from "react-router";
import "./styles.css";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="emptyCart">
      <img
        src="https://mir-s3-cdn-cf.behance.net/projects/404/54b13147340145.Y3JvcCw0MDUsMzE3LDAsNDI.png"
        alt=""
      />
      <button onClick={() => navigate("/")}>
        <i className="fas fa-long-arrow-alt-left"></i> Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;
