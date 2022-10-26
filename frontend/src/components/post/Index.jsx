// NODE_MODULES
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  details: {
    padding: 20,
  },
  image: {
    width: "100%",
    maxWidth: 400,
    height: 200,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    objectFit: "cover"
  },
  post: {
    maxWidth: 400,
    borderRadius: 7,
    backgroundColor: "var(--white)",
  },
  title: {
    margin: 0,
    fontFamily: "'Roboto', serif",
    fontSize: 20,
    color: "var(--primaryText)",
  },
  subTitle: {
    marginBottom: 0,
    color: "var(--lightText)",
    fontSize: 15,
  },
});

const Post = ({
  title,
  subTitle,
  image,
  meta,
  mediaQueries,
}) => {
  const { tabletDown } = mediaQueries;
  const classes = useStyles();

  return (
    <div
      className={classes.post}
      style={{ margin: tabletDown ? "auto" : 10 }}
    >
      <img className={classes.image} src={image} alt="" />
      <div className={classes.details}>
        <div className={classes.meta}>
          <span className={classes.meta}>{meta}</span>
        </div>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.subTitle}>{subTitle}</p>
      </div>
    </div>
  );
};

export default Post;
