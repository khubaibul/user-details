import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("cars/fetchCars", async () => {
    const res = await axios.get("/data.json");
    return res.data.travelAgency;
})

const usersSlice = createSlice({
    name: "agencies",
    initialState: {
        isLoading: false,
        users: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
            state.error = null;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.users = [];
            state.error = action.error.message;
        });
    }
})


export default usersSlice.reducer;