// add product to redux store
const handleAddToCart = (data, dispatch, addTocart) => {
  // get cart from localstorage
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (cart) {
    // check if data already exist
    const dataExists = cart.filter((item) => item.id === data.id);
    // add data if it does not exist in the localstorage
    if (dataExists.length === 0) {
      dispatch(addTocart(data));
    }
  } else {
    dispatch(addTocart(data));
  }
};

export default handleAddToCart;
