import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  title: {
    color: "var(--primaryText)",
    fontSize: 25,
    fontWeight: 600,
    marginBottom: 10,
  }
})

const Header = ({ title }) => {
  const classes = useStyles();

  return (
    <h3 className={classes.title}>{title}</h3>
  )
}

export default Header