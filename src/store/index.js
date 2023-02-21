import { configureStore } from "@reduxjs/toolkit";
import { MenuItemsReducer } from "./slices/menuItemSlice";

const store = configureStore({
  reducer: {
    menuItems: MenuItemsReducer,
  },
});

export default store;
