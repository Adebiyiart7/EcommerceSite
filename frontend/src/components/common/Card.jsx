// NODE_MODULES
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    textAlign: "center",
    margin: "40px 0"
  },
  image: {
    width: "100%",
    maxWidth: 200,
    borderRadius: "50%"
  },
  subTitle: {
    margin: 0,
    color: "var(--lightText)",
    fontWeight: 300,
    lineHeight: 1.5,
  },
  title: {
    marginBottom: 5,
    color: "var(--primaryText)",
  },
})

const Card = ({ icon, image, subTitle, title, textColor}) => {
  const classes = useStyles();

  return (
    <div className={classes.card}> 
      {icon && <div className={classes.icon}>{icon}</div>}
      {image && <img className={classes.image} src={image} alt="" />}
      <h3 className={classes.title} style={{color: textColor}}>{title}</h3>
      <p className={classes.subTitle} style={{color: textColor}}>{subTitle}</p>
    </div>
  );
};

export default Card;
