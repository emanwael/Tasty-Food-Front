import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerLogin from "./pages/user-form/login";
import CustomerRegister from "./pages/user-form/register";
import AdminLogin from "./pages/restaurant-form/login";
import AdminRegister from "./pages/restaurant-form/register";
import ManageItemForm from "./pages/manage-item-form/manageItemForm";
import Adminmenu from "./pages/Adminmenu/AdminMenu";
<<<<<<< HEAD
import Layout from './Dashboard/layout';

function App() {
  return (
    
    <div>
      <Layout></Layout>
      {/*
=======
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
>>>>>>> d1d1b8463bac62dc6dc012d4be2a7f3e300eb548
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/customer-register" element={<CustomerRegister />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-register" element={<AdminRegister />} />
        <Route path="/add" element={<ManageItemForm mode="add" />} />
        <Route path="/edit" element={<ManageItemForm mode="edit" />} />
        <Route path="adminMenue/:id" element={<Adminmenu />} />

        <Route path="/restaurant/:id" element={<HomeRestaurant />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
<<<<<<< HEAD
        */}
    </div>
    
=======
    </Elements>
>>>>>>> d1d1b8463bac62dc6dc012d4be2a7f3e300eb548
  );
}

export default App;
