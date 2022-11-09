// NODE_MODULES
import { useDispatch } from "react-redux";

// LOCAL IMPORT
import Item from "./Item";
import {
  removeFromCart,
  updateItemQuantity,
} from "../../features/cart/cartSlice";

const Items = ({ items, header, classes }) => {
  const dispatch = useDispatch();

  // remove item from cart
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  // update item qantity in cart
  const handleUpdateQuantity = (id, action) => {
    console.log(id, action);
    dispatch(updateItemQuantity({ id: id, action: action }));
  };

  return (
    <>
      {items.length < 1 ? (
        <p style={{ textAlign: "center" }}>Your {header} is Empty!</p>
      ) : (
        <div className={classes.items}>
          {items.map((item, index) => (
            <div key={index}>
              <Item
                item={item}
                classes={classes}
                onRemove={(id) => handleRemoveFromCart(id)}
                onUpdateQuantity={(id, action) =>
                  handleUpdateQuantity(id, action)
                }
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Items;
