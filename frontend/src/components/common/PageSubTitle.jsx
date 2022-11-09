// NODE_MODULES
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  text: {
    color: "var(--primaryText)",
    margin: 0,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: 600,
    fontFamily: "'Roboto', serif",
    marginBottom: 10,
  }
})

const PageSubTitle = ({ text }) => {
  const classes = useStyles()

  return (
    <h4 className={classes.text}>{text}</h4>
  )
}

export default PageSubTitle