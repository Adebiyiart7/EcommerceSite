// NODE_MODULES
import { useContext } from "react";

// LOCAL IMPORTS
import Navbar from "../../components/navbar/Navbar";
import { AppContext } from "../../App";
import PageTitle from "../../components/common/PageTitle";
import Footer from "../../components/footer/Index";
import NewsLetter from "../../components/NewsLetter";
import Aside from "./aside";

const Blog = () => {
  const { mediaQueries } = useContext(AppContext);
  const { tabletDown } = mediaQueries;

  const inlineStyles = {
    blogContainer: {
      backgroundColor: "var(--lightBackground)",
      display: "flex",
      flexDirection: tabletDown && "column",
      justifyContent: "space-between"
    },
  };

  return (
    <div>
      <Navbar mediaQueries={mediaQueries} />
      <PageTitle
        title={"Blog List"}
        subTitle={"Learn More About Us"}
        mediaQueries={mediaQueries}
      />
      <div style={inlineStyles.blogContainer}>
        <main>Content</main>
        <Aside mediaQueries={mediaQueries} />
      </div>
      <NewsLetter mediaQueries={mediaQueries} />
      <Footer mediaQueries={mediaQueries} />
    </div>
  );
};

export default Blog;
