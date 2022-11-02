import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiStatusOnline } from "react-icons/hi";

const useStyles = makeStyles({
  address: {
    flex: 0.5,
    textAlign: "center",
  },
  contactIcon: {
    color: "var(--primaryColor)",
    padding: 16,
    fontSize: 50,
    borderRadius: "50%",
  },
  text: {
    fontWeight: 500,
    color: "var(--primaryText)",
  },
});

const Address = () => {
  const classes = useStyles();

  return (
    <div className={classes.address}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FaMapMarkerAlt className={classes.contactIcon} />
          <div className={classes.text}>
            Ademola Akintunde Street, Kubwa, Abuja Nigeria.
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <MdEmail className={classes.contactIcon} />
          <div className={classes.text}>support@freshfood.com</div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FaPhoneAlt className={classes.contactIcon} />
          <div className={classes.text}>09029242729</div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <HiStatusOnline className={classes.contactIcon} />
          <div className={classes.text}>24hrs; Mon - Sat</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Address;
