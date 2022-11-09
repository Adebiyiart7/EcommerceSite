// NODE_MODULES
// import { useDispatch } from "react-redux";
// import { makeStyles } from "@mui/styles";

// LOCAL IMPORTS

// const useStyles = makeStyles({
// });

const Main = ({ mediaQueries }) => {
  // const classes = useStyles();
  const { tabletDown } = mediaQueries;

  const inlineStyles = {
    main: {
      marginRight: tabletDown ? 0 : 20,
    },
  };

  return <div style={inlineStyles.main}></div>;
};

export default Main;
