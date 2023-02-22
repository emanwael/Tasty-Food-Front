import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:5100/meals";
let initialState = {
    mealsList: [],
    errors: [],
    isLoading: false,
};

export const getMeals = createAsyncThunk(
    "meals/getMeals",
    async (args, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await axios.get(baseURL);
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }

)
export const mealSlice = createSlice({
    name: "meals",
    initialState,
    reducers: {

    },
    extraReducers: {
        [getMeals.fulfilled]: (state, action) => {
            if (action.payload) {
                state.mealsList = action.payload;

                console.log("meals111", state.mealsList);

            }
        }
    }

})

export const mealsReducer = mealSlice.reducer;
export const mealsAction = mealSlice.actions;
