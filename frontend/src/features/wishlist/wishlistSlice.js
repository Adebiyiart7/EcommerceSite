import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const wishlist = JSON.parse(localStorage.getItem("wishlist"));

const initialState = {
  wishlist: wishlist ? wishlist : [],
  isSuccess: false,
  message: "",
};

// ADD TO WISHLIST
export const addToWishlist = createAsyncThunk(
  "wishlist/add",
  (data, thunkAPI) => {
    try {
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("Error adding item to wish list!");
    }
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(addToWishlist.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.wishlist.push(action.payload);
    });
  },
});

export const { reset } = wishlistSlice.actions;
export default wishlistSlice.reducer;
