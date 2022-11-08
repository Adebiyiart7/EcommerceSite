import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const cart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  cart: cart ? cart : [],
  isSuccess: false,
  message: "",
};

// ADD TO CART
export const addTocart = createAsyncThunk("cart/add", (data, thunkAPI) => {
  try {
    return data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue("Error adding item to cart!");
  }
});

// REMOVE FROM CART
export const removeFromCart = createAsyncThunk(
  "cart/remove",
  (id, thunkAPI) => {
    try {
      return id;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("Error removing item from cart!");
    }
  }
);

// UPDATE CART ITEM QUANTITY
export const updateItemQuantity = createAsyncThunk(
  "cart/update",
  (data, thunkAPI) => {
    try {
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("Error updating item from cart!");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTocart.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.cart.push(action.payload);
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.isSuccess = true;
        const newList = state.cart.filter((item) => item.id !== action.payload);
        console.log(action.payload);
        state.cart = newList;
      })
      .addCase(updateItemQuantity.fulfilled, (state, action) => {
        state.isSuccess = true;
        const { id, action: updateAction } = action.payload;
        const cart = state.cart; // Get initial state
        const item = cart.find((n) => n.id === id); // find the item clicked

        // update the quatity accordinglly
        if (updateAction === "add") {
          item.quantity++;
        } else if (updateAction === "subtract" && item.quantity > 1) {
          item.quantity--;
        }
        state.cart = cart;
      });
  },
});

export const { reset } = cartSlice.actions;
export default cartSlice.reducer;
