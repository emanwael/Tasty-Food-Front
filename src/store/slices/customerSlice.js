import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:5100/customers";
let initialState = {
  customerData: {},
  errors: [],
  isLoading: false,
};

export const getAllCustomers = createAsyncThunk(
  "Customer/getAllCustomers",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(baseURL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getCustomerById = createAsyncThunk(
  "Customer/getCustomerById",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(`${baseURL}/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const signCustomerIn = createAsyncThunk(
  "Customer/getCustomerById",
  async (customer, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post(`${baseURL}/signin`, customer);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addCustomer = createAsyncThunk(
  "Customers/addCustomer",
  async (customer, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post(baseURL, customer);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const editCustomer = createAsyncThunk(
  "Customers/editCustomer",
  async (customer, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.put(`${baseURL}/${customer._id}`, customer);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const removeCustomer = createAsyncThunk(
  "Customers/removeCustomer",
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
const CustomersSlice = createSlice({
  name: "Customers",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllCustomers.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllCustomers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.CustomersList = action.payload;
    },
    [getAllCustomers.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    [getCustomerById.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCustomerById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.CustomersList = action.payload;
    },
    [getCustomerById.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    [signCustomerIn.pending]: (state, action) => {
      state.isLoading = true;
    },
    [signCustomerIn.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.CustomersList = action.payload;
    },
    [signCustomerIn.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    [addCustomer.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addCustomer.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.CustomersList = action.payload;
    },
    [addCustomer.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    [editCustomer.pending]: (state, action) => {
      state.isLoading = true;
    },
    [editCustomer.fulfilled]: (state, action) => {
      state.isLoading = false;
      //   state.CustomersList = action.payload;
    },
    [editCustomer.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    [removeCustomer.pending]: (state, action) => {
      state.isLoading = true;
    },
    [removeCustomer.fulfilled]: (state, action) => {
      state.isLoading = false;
      //   state.CustomersList = action.payload;
    },
    [removeCustomer.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

export const CustomersReducer = CustomersSlice.reducer;
export const CustomersActions = CustomersSlice.actions;
