import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import ManageItemForm from "./Components/manage-item-form/manageItemForm";
import Login from "./pages/Form-user/login";
import Register from "./pages/Form-user/register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={<ManageItemForm />} />
        <Route path="/edit" element={<ManageItemForm />} />
      </Routes>
    </div>
  );
}

export default App;
