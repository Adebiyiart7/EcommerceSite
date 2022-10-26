// NODE_MODULES
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    textAlign: "center",
    color: "var(--white)",
    // backgroundColor: "var(--white)",
  },
  subTitle: {
    margin: 0,
  },
  title: {
    marginBottom: 5
  },
})

const Card = ({ icon, subTitle, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.icon}>{icon}</div>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.subTitle}>{subTitle}</p>
    </div>
  );
};

export default Card;
