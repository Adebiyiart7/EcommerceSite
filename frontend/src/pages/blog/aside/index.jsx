import React from "react";

// LOCAL IMPORTS
import SearchBox from "../SearchBox";

const Aside = ({ mediaQueries }) => {
  const { tabletUp } = mediaQueries;

  const inlineStyles = {
    aside: {
      width: tabletUp && 260,
    },
  };

  return (
    <aside style={inlineStyles.aside}>
      <SearchBox  />
    </aside>
  );
};

export default Aside;
