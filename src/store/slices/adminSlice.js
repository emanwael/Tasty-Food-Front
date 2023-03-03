import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:5100/restaurant-admins";
let initialState = {
  AdminData: {},
  // RestaurantData: {},
  errors: [],
  isLoading: false,
};

////////////////////////TODO: Admin Functions
export const signAdminIn = createAsyncThunk(
  "Admin/signAdminIn",
  async (Admin, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post(`${baseURL}/signin`, Admin);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addAdmin = createAsyncThunk(
  "Admins/addAdmin",
  async (Admin, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post(baseURL, Admin);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const editAdmin = createAsyncThunk(
  "Admins/editAdmin",
  async (Admin, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.put(`${baseURL}/${Admin._id}`, Admin);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const removeAdmin = createAsyncThunk(
  "Admins/removeAdmin",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.delete(`${baseURL}/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const AdminsSlice = createSlice({
  name: "Admins",
  initialState,
  reducers: {
    logoutAdmin: (state, aaction) => {
      state.AdminData = {};
    },
  },
  extraReducers: {
    [signAdminIn.pending]: (state, action) => {
      state.isLoading = true;
    },
    [signAdminIn.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.AdminData = action.payload;
    },
    [signAdminIn.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    [addAdmin.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addAdmin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.AdminData = action.payload;
    },
    [addAdmin.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    [editAdmin.pending]: (state, action) => {
      state.isLoading = true;
    },
    [editAdmin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.AdminData = action.payload;
    },
    [editAdmin.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    [removeAdmin.pending]: (state, action) => {
      state.isLoading = true;
    },
    [removeAdmin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.AdminData = {};
    },
    [removeAdmin.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

export const AdminsReducer = AdminsSlice.reducer;
export const AdminsActions = AdminsSlice.actions;
