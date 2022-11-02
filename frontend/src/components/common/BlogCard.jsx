// NODE_NODULES
import { makeStyles } from "@mui/styles";
import {  FaCalendarAlt, FaComments, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  header: {
    borderBottom: "1px solid var(--lightBorder)",
  },
  image: {
    objectFit: "cover",
  },
  metaItem: {
    color: "var(--lightText)",
    fontSize: 14,
    margin: "0 7px",
  },
  right: {
    backgroundColor: "var(--white)",
    padding: 16,
  },
  subTitle: {
    color: "var(--primaryText)",
    lineHeight: 1.5,
  },
  title: {
    color: "var(--primaryText)",
    fontSize: 22,
    marginTop: 0,
    fontFamily: "Roboto"
  },
});

const BlogCard = ({
  mediaQueries,
  displayImage,
  title,
  subTitle,
  author,
  date,
  commentCount,
  action,
}) => {
  const { tabletDown, laptopDown } = mediaQueries;
  const classes = useStyles();

  const inlineStyles = {
    blogCard: {
      display: "flex",
      marginRight: tabletDown ? 0 : 20,
      borderTop: "4px solid var(--primaryColor)",
      flexDirection: laptopDown && "column",
      marginBottom: 20,
    },
  };

  return (
    <div style={inlineStyles.blogCard}>
      <img className={classes.image} src={displayImage} alt="blog post" />
      <div className={classes.right}>
        <div className={classes.header}>
          <h3 className={classes.title}>{title}</h3>
          <div>
            <span>
              <FaUser color="var(--primaryColor)" size={16} />
              <span className={classes.metaItem}>{author}</span>
            </span>
            <span>
              <FaCalendarAlt color="var(--primaryColor)" size={16} />
              <span className={classes.metaItem}>{date}</span>
            </span>
            <span>
              <FaComments color="var(--primaryColor)" size={16} />
              <span className={classes.metaItem}>{commentCount}</span>
            </span>
          </div>
        </div>
        <div className={classes.body}>
          <p className={classes.subTitle}>{subTitle}</p>
          <Link to={"/"}>{action}</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
