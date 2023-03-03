import { configureStore } from "@reduxjs/toolkit";
import { MenuItemsReducer } from "./slices/menuItemSlice";
import { CustomersReducer } from "./slices/customerSlice";
import { AdminsReducer } from "./slices/adminSlice";
import { mealReducer } from "./slices/mealSlice";
import { cartReducer } from "./slices/cart";
import { restaurantReducer } from "./slices/resturants";

const store = configureStore({
  reducer: {
    menuItems: MenuItemsReducer,
    customers: CustomersReducer,
    admins: AdminsReducer,
    mealSlice: mealReducer,
    cartSlice: cartReducer,
    resturantsSlice: restaurantReducer,
  },
});

export default store;
