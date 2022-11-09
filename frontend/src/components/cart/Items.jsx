// LOCAL IMPORT
import Item from "./Item";

const Items = ({ items, header, classes}) => {
  return (
    <>
      {items.length < 1 ? (
        <p style={{ textAlign: "center" }}>Your {header} is Empty!</p>
      ) : (
        <div className={classes.items}>
          {items.map((item, index) => (
            <Item item={item} index={index} classes={classes} />
          ))}
        </div>
      )}
    </>
  );
};

export default Items;
