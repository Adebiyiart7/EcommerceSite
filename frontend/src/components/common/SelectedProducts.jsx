// NODE MODULES
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  item: {
    display: "flex",

  },
  header: {
    fontWeight: 600,
    fontSize: 20,
    textAlign: "center",
  },
  list: {
    padding: 16,
    zIndex: "var(--zIndex2)",
    color: "var(--secondaryText)",
    backgroundColor: "var(--white)",
  },
});

const SelectedPoducts = ({items, header}) => {
  const classes = useStyles();

  const inlineStyles = {
    list: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      maxWidth: 320,
      height: "100vh",
    },
  };

  return (
    <div className={classes.list} style={inlineStyles.list}>
      <header className={classes.header}>{header}</header>
      {items.map((item, index) => (
        <div className={classes.item} key={index}>
          <img className={classes.image} src={item.image} alt="" />
          <div>
            <div>{item.name}</div>
            <div>{item.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedPoducts;
