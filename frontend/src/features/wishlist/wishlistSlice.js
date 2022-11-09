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
      return thunkAPI.rejectWithValue("Error adding item to wishlist!");
    }
  }
);

// REMOVE FROM WISHLIST
export const removeFromWishlist = createAsyncThunk(
  "wishlist/remove",
  (id, thunkAPI) => {
    try {
      return id;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("Error removing item from wishlist!");
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
    builder
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.wishlist.push(action.payload);

        // add items to localstorage
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      })
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.isSuccess = true;
        const newList = state.wishlist.filter(
          (item) => item.id !== action.payload
        );
        state.wishlist = newList;
      });
  },
});

export const { reset } = wishlistSlice.actions;
export default wishlistSlice.reducer;
