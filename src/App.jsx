import { Route, Routes } from "react-router-dom";
import "./App.css";
import ManageItemForm from "./pages/manage-item-form/manageItemForm";
import Login from "./pages/Form-user/login";
import Register from "./pages/Form-user/register";
import Adminmenu from "./pages/Adminmenu/AdminMenu";
import Layout from './Dashboard/layout';

function App() {
  return (
    
    <div>
      <Layout></Layout>
      {/*
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={<ManageItemForm />} />
        <Route path="/edit" element={<ManageItemForm />} />
        <Route path="adminMenue/:id" element={<Adminmenu />} />

      </Routes>
        */}
    </div>
    
  );
}

export default App;
