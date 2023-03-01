import { Route, Routes } from "react-router-dom";
import "./App.css";
import ManageItemForm from "./pages/manage-item-form/manageItemForm";
import Login from "./pages/Form-user/login";
import Register from "./pages/Form-user/register";
import Adminmenu from "./pages/Adminmenu/AdminMenu";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import HomeRestaurant from "./pages/restaurant-profile/Home";
import Cart from "./pages/restaurant-profile/Cart";
import Payment from "./pages/payment/payment";
import HomePage from "./pages/Home/homePage";

const stripePromise = loadStripe(
  "pk_test_51MedOvFmBl6qtJ7QVF4irouRTDbxkRkEf6Oq69eOARVN5RWOpLVnOBJEhiCOQTXbbMJWm87tAUHpYsIGCv0j6zpi00j7vRaKsJ"
);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={<ManageItemForm />} />
        <Route path="/edit" element={<ManageItemForm />} />
        <Route path="adminMenue/:id" element={<Adminmenu />} />

        <Route path="/restaurant/:id" element={<HomeRestaurant />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Elements>
  );
}

export default App;
