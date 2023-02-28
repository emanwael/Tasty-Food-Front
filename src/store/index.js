import { configureStore } from "@reduxjs/toolkit";
import { MenuItemsReducer } from "./slices/menuItemSlice";
import { CustomersReducer } from "./slices/customerSlice";
import { mealReducer } from "./slices/mealSlice";
const store = configureStore({
  reducer: {
    menuItems: MenuItemsReducer,
    customers: CustomersReducer,
    mealSlice: mealReducer,
  },
});

export default store;
