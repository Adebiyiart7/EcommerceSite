// add product to redux store
const handleAddToWishlist = (data, dispatch, addToWishlist) => {
  // get wishlist from localstorage
  const wishlist = JSON.parse(localStorage.getItem("wishlist"));
  if (wishlist) {
    // check if data already exist
    const dataExists = wishlist.filter((item) => item.id === data.id);
    // add data if it does not exist in the localstorage
    if (dataExists.length === 0) {
      dispatch(addToWishlist(data));
    }
  } else {
    dispatch(addToWishlist(data));
  }
};

export default handleAddToWishlist;
