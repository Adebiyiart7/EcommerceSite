// NODE_MODULES
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  recentPostCard: {
    textDecoration: "none",
    display: "flex",
    marginBottom: 16,
    "&:last-child": {
      marginBottom: 0,
    },
  },
  subTitle: {
    fontSize: 14,
    color: "var(--lightText)",
    marginTop: 10,
  },
  title: {
    color: "var(--primaryText)",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 1.5,
  },
});

const RecentPostCard = ({ image, title, subTitle }) => {
  const classes = useStyles();

  return (
    <Link className={classes.recentPostCard}>
      <img className={classes.image} src={image} alt="" />
      <div>
        <div className={classes.title}>{title}</div>
        <div className={classes.subTitle}>{subTitle}</div>
      </div>
    </Link>
  );
};

export default RecentPostCard;
