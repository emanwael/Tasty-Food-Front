import React, { useState } from "react";

import { deletMeal } from "../../store/slices/mealSlice";
import { useDispatch } from "react-redux";
//import { removeMenuItem } from "../../store/slices/menuItemSlice"
export function Category({ meal, edit, deleteItem }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  // const handleShow = () => {
  //   // alert(`${meal.meal_name} Deleted Successfully`);
  //   dispatch(deletMeal(meal._id));
  // };

  return (
    <>
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="restaurantstyle">
          <img src={meal.meal_img} alt="" className="imgcard " />
          <h2 style={{ fontSize: "0.8rem" }}>{meal.meal_name}</h2>

          <div className="text-center icons">
            <button onClick={edit} className="buttonn">
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button variant="none" onClick={deleteItem} className="buttonn">
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
