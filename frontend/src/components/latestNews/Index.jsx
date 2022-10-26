// NODE_MODULES
import { makeStyles } from "@mui/styles";

// LOCAL IMPORTS
import PageTitle from "../common/PageTitle";
import Post from "../post/Index";
import beans from "../../assets/images/beans.jpg";
import { Container } from "@mui/material";
import { FaComments, FaUser } from "react-icons/fa";

const useStyles = makeStyles({
  meta: {
    color: "var(--lightText)",
    fontSize: 14,
    marginBottom: 5,
  },
  mainMeta: {
    color: "var(--primaryColor)",
  },
  latestNews: {
    backgroundColor: "var(--lightBackground)",
    padding: "50px 0",
  },
});

const LatestNews = ({ mediaQueries }) => {
  const {  tabletDown } = mediaQueries;
  const classes = useStyles();

  const postsStyles = {
    display: "flex",
    flexDirection: tabletDown ? "column" : "row",
  };

  const PostMeta = () => {
    return (
      <div
        className={classes.meta}
      >
        <span>
          <FaUser />
          &nbsp; Posted By <span className={classes.mainMeta}>Seun</span>
        </span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span>
          <FaComments />
          &nbsp; <span className={classes.mainMeta}>33 Comments</span>
        </span>
      </div>
    );
  };

  return (
    <div className={classes.latestNews}>
      <PageTitle
        title={"Latest News"}
        subTitle={"Blog Posts"}
        mediaQueries={mediaQueries}
      />
      <Container sx={postsStyles}>
        <Post
          subTitle={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores accusantium quaerat laborum, eius et similique provident in officia incidunt numquam?"
          }
          title={"Harvesting and preserving beans and other similar legumes"}
          image={beans}
          meta={<PostMeta />}
          mediaQueries={mediaQueries}
        />
        <Post
          subTitle={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores accusantium quaerat laborum, eius et similique provident in officia incidunt numquam?"
          }
          title={"Harvesting and preserving beans and other similar legumes"}
          image={beans}
          meta={<PostMeta />}
          mediaQueries={mediaQueries}
        />
        <Post
          subTitle={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores accusantium quaerat laborum, eius et similique provident in officia incidunt numquam?"
          }
          title={"Harvesting and preserving beans and other similar legumes"}
          image={beans}
          meta={<PostMeta />}
          mediaQueries={mediaQueries}
        />
      </Container>
    </div>
  );
};

export default LatestNews;
