import React from "react";

// LOCAL IMPORTS
import SearchBox from "../../../components/common/SearchBox";
import RecentPosts from "./RecentPosts";
import advert from "../../../assets/images/ad1.jpg";

const Aside = ({ mediaQueries }) => {
  const { tabletUp } = mediaQueries;

  const inlineStyles = {
    aside: {
      minWidth: tabletUp && 300,
    },
  };

  return (
    <aside style={inlineStyles.aside}>
      <SearchBox />
      <br />
      <RecentPosts />
      <div style={{ marginTop: 16 }}>
        {tabletUp && (
          <>
            <div style={{ color: "var(--lightText)", fontSize: 14 }}>
              Advertisement
            </div>
            <img src={advert} alt="" />
          </>
        )}
      </div>
    </aside>
  );
};

export default Aside;
