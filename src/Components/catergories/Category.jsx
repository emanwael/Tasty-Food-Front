import React, { useState } from 'react'

import { deletMeal } from "../../store/slices/mealSlice"
import { useDispatch } from 'react-redux';
//import { removeMenuItem } from "../../store/slices/menuItemSlice"
export function Category({ meal, edit }) {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()

    const handleClose = () => setShow(false);
    const handleShow = () => {
        dispatch(deletMeal(meal._id))
    }





    return (
        <>



            <div className="col-sm-6 col-md-4 col-lg-3">
                <div className='restaurantstyle'>

                    <img src={meal.meal_img} alt="" />
                    <h2 style={{ fontSize: "0.8rem" }}>{meal.meal_name}</h2>


                    <div className='text-center icons'>
                        <button onClick={edit}><i className="fa-solid fa-pen-to-square"></i></button>
                        <button variant="none" onClick={handleShow}>
                            <i className="fa-solid fa-trash"></i>

                        </button>
                    </div>

                </div> </div>


        </>
    )
}