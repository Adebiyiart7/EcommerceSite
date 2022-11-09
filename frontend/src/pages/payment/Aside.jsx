// NODE_MODULES
// import { makeStyles } from "@mui/styles";

// LOCAL IMPORTS

// const useStyles = makeStyles({
//   lists: {
//     padding: "6px 0",
//     borderTop: "4px solid var(--primaryColor)",
//   },
//   summary: {
//     padding: "0 16px",
//     color: "var(--primaryText)",
//     fontFamily: "'Roboto', serif",
//   },
// });

const Aside = ({ mediaQueries }) => {
  const { laptopUp, laptopDown } = mediaQueries;

  const inlineStyles = {
    aside: {
      minWidth: laptopUp && 350,
      marginTop: laptopDown && 20,
    },
  };
  return (
    <aside style={inlineStyles.aside}>
    </aside>
  );
};

export default Aside;
