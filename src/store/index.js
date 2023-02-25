import { configureStore } from "@reduxjs/toolkit";
import { MenuItemsReducer } from "./slices/menuItemSlice";
import { CustomersReducer } from "./slices/customerSlice";
const store = configureStore({
  reducer: {
    menuItems: MenuItemsReducer,
    customers: CustomersReducer,
  },
});

export default store;
