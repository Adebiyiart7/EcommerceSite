// NODE_MODULES
import { makeStyles } from "@mui/styles";

// LOCAL IMPORTS
import RecentPostCard from "../../../components/common/RecentPostCard";
import blogImage1 from "../../../assets/images/blogImage1.jpg";
import blogImage2 from "../../../assets/images/blogImage2.jpg";
import blogImage3 from "../../../assets/images/farmer3.jpg";

const useStyles = makeStyles({
  header: {
    fontSize: 25,
    fontWeight: 700,
    fontFamily: "'Roboto', serif",
    color: "var(--primaryText)",
    padding: "10px 20px",
    textTransform: "uppercase",
    borderBottom: "1px solid var(--primaryBorder)",
  },
  recentPost: {
    backgroundColor: "var(--white)",
    borderTop: "4px solid var(--primaryColor)",
  },
});

const RecentPosts = () => {
  const classes = useStyles();

  return (
    <div className={classes.recentPost}>
      <header className={classes.header}>Recent Posts</header>
      <div
        style={{
          padding: 20,
        }}
      >
        <RecentPostCard
          image={blogImage1}
          title={
            "Preserving our fresh tomatoes organically to still remain fresh."
          }
          subTitle={"17 June 2022"}
        />
        <RecentPostCard
          image={blogImage2}
          title={
            "Preserving our fresh tomatoes organically to still remain fresh."
          }
          subTitle={"17 June 2022"}
        />
        <RecentPostCard
          image={blogImage3}
          title={
            "Preserving our fresh tomatoes organically to still remain fresh."
          }
          subTitle={"17 June 2022"}
        />
        <RecentPostCard
          image={blogImage1}
          title={
            "Preserving our fresh tomatoes organically to still remain fresh."
          }
          subTitle={"17 June 2022"}
        />
        <RecentPostCard
          image={blogImage2}
          title={
            "Preserving our fresh tomatoes organically to still remain fresh."
          }
          subTitle={"17 June 2022"}
        />
      </div>
    </div>
  );
};

export default RecentPosts;
