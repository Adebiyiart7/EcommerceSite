// NODE_MODULES
import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPinterest,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

// LOCAL IMPORTS
import app_store from "../../assets/images/app_store.png";
import play_store from "../../assets/images/play_store.png";
import payment_methods from "../../assets/images/payment_methods.png";

const footerText = "rgb(153, 153, 153)";

const currentYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const useStyles = makeStyles({
  brandName: {
    color: footerText,
    textDecoration: "none",
  },
  contactIcon: {
    fontSize: 16,
    color: "var(--primaryColor)",
    border: "2px dashed var(--primaryColor)",
    borderRadius: "50%",
    padding: 10,
    marginRight: 10,
  },
  contactList: {
    listStyle: "none",
    fontSize: 15,
    lineHeight: 1.2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  copyRight: {
    margin: "10px 0",
    display: "inline",
    textAlign: "center",
  },
  footer: {
    backgroundColor: "var(--secondaryColor)",
    padding: "20px 0",
    color: footerText,
  },
  header: {
    color: "#ddd",
    textTransform: "uppercase",
    fontFamily: "'Roboto', serif",
  },
  link: {
    color: footerText,
    textDecoration: "none",
    "&:hover": {
      color: "var(--primaryColor)",
    },
  },
  list: {
    listStyle: "none",
    fontSize: 15,
    lineHeight: 1.8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  lists: {
    padding: 0,
  },
  social: {
    marginRight: 10,
    color: "#fff",
  },
  socialIcon: {
    fontSize: 18,
    padding: 12,
    borderRadius: "50%",
    backgroundColor: "#403b3b",
    "&:hover": {
      backgroundColor: "var(--primaryColor)",
    },
  },
});

const Footer = ({ mediaQueries }) => {
  const {tabletDown} = mediaQueries
  const classes = useStyles();

  const subFooterContainer = {
    display: "flex",
    flexDirection: tabletDown ? "column" : "row",
    justifyContent: "space-between",
    marginTop: "20px",
  }

  return (
    <div className={classes.footer}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6} md={3}>
            <h3 className={classes.header}>Information</h3>
            <ul className={classes.lists}>
              <Link className={classes.link} to="/">
                <li className={classes.list}>Blog</li>
              </Link>
              <Link className={classes.link} to="/">
                <li className={classes.list}>Payment</li>
              </Link>
              <Link className={classes.link} to="/">
                <li className={classes.list}>Shipment</li>
              </Link>
              <Link className={classes.link} to="/">
                <li className={classes.list}>Refund & Return</li>
              </Link>
              <Link className={classes.link} to="/">
                <li className={classes.list}>Order</li>
              </Link>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <h3 className={classes.header}>Help & Support</h3>
            <ul className={classes.lists}>
              <Link className={classes.link} to="/">
                <li className={classes.list}>About</li>
              </Link>
              <Link className={classes.link} to="/">
                <li className={classes.list}>FAQs</li>
              </Link>
              <Link className={classes.link} to="/">
                <li className={classes.list}>Terms & Conditions</li>
              </Link>
              <Link className={classes.link} to="/">
                <li className={classes.list}>Privacy Policy</li>
              </Link>
              <Link className={classes.link} to="/">
                <li className={classes.list}>Customer Service</li>
              </Link>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <h3 className={classes.header}>Contact Us</h3>
            <ul className={classes.lists}>
              <li className={classes.contactList}>
                <FaMapMarkerAlt className={classes.contactIcon} />
                <span>Ademola Akintunde Street, Kubwa, Abuja Nigeria.</span>
              </li>
              <li className={classes.contactList}>
                <FaPhoneAlt className={classes.contactIcon} />
                <span>09029242729</span>
              </li>
              <li className={classes.contactList}>
                <MdEmail className={classes.contactIcon} />
                <span>support@freshfood.com</span>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <h3 className={classes.header}>Connect with us</h3>
            <div className={classes.socials}>
              <Link className={classes.social} to="/">
                <FaFacebook className={classes.socialIcon} />
              </Link>
              <Link className={classes.social} to="/">
                <FaInstagram className={classes.socialIcon} />
              </Link>
              <Link className={classes.social} to="/">
                <FaYoutube className={classes.socialIcon} />
              </Link>
              <Link className={classes.social} to="/">
                <FaPinterest className={classes.socialIcon} />
              </Link>
              <Link className={classes.social} to="/">
                <FaWhatsapp className={classes.socialIcon} />
              </Link>
            </div>
            <h3 className={classes.header}>Download App</h3>
            <div>
              <a href="/">
                <img
                  style={{ marginRight: 10 }}
                  src={play_store}
                  alt="play store"
                />
              </a>
              <a href="/">
                <img src={app_store} alt="app store" />
              </a>
            </div>
          </Grid>
        </Grid>
      </Container>
      <hr style={{ borderColor: "#403b3b", borderTop: "none" }} />
      <Container sx={subFooterContainer}>
        <p className={classes.copyRight}>
          Copyright {currentYear()} © Theme Created By{" "}
          <strong>
            <a
              className={classes.brandName}
              target="blank"
              href="https://xtraaa.net"
            >
              Xtraaa
            </a>
          </strong>
          , All Rights Reserved
        </p>
        <img style={{width:"263px", margin: "10px auto"}}  src={payment_methods} alt="payment methods" />
      </Container>
    </div>
  );
};

export default Footer;
