import React, { useEffect, useRef } from "react";
import ButtonCartCount from "../components/common/ButtonCartCount";
import Banner from "../components/Home/Banner";
import Menu from "../components/common/Menu";
import { menuItemsData } from "../components/common/Menu/data";
import { useDispatch, useSelector } from "react-redux";
import { getAllMeals, mealSlice } from "../../../store/slices/mealSlice";
import { useNavigate, useParams } from "react-router-dom";
import MyNavbar from "../../Home/Navbar/myNavbar";

const HomeRestaurant = () => {
  const menuRef = useRef();

  const { id } = useParams();

  const { myMenu, restaurantInfo } = useSelector((state) => state.mealSlice);

  const dispatch = useDispatch();

  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    dispatch(getAllMeals(id));
  }, []);
  return (
    <div>
      <MyNavbar />
      <Banner handleScrollMenu={handleScrollMenu} />
      <Menu list={myMenu} ref={menuRef} />
      <ButtonCartCount />
      {myMenu.length > 0 && console.log(myMenu)}
      {/* {restaurantInfo != {} && console.log(restaurantInfo)} */}
    </div>
  );
};

export default HomeRestaurant;
