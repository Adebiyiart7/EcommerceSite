// NODE_MODULES
import { Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import Button from "../../components/common/Button";

const useStyles = makeStyles({
  messaging: {
    flex: 0.5,
    padding: "16px 0",
  },
});

const Messaging = ({ mediaQueries }) => {
  const { tabletDown } = mediaQueries;
  const classes = useStyles();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone_number: "",
    subject: "",
    message: "",
  });
  const { fullname, email, phone_number, subject, message } = formData;

  const onChangeForm = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = () => {};

  return (
    <div className={classes.messaging} style={{ marginTop: tabletDown && 50 }}>
      <form action="">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              type={"text"}
              size={"small"}
              value={fullname}
              name={"fullname"}
              label={"Full Name"}
              onChange={onChangeForm}
              placeholder="Enter your full name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              type={"email"}
              size={"small"}
              value={email}
              name={"email"}
              label={"Email"}
              onChange={onChangeForm}
              placeholder="Enter your email address"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              type={"text"}
              size={"small"}
              value={phone_number}
              name={"phone_number"}
              label={"Phone Number"}
              onChange={onChangeForm}
              placeholder="Enter your phone number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              type={"text"}
              size={"small"}
              value={subject}
              name={"subject"}
              label={"Subject"}
              onChange={onChangeForm}
              placeholder="Enter subject"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              multiline
              size={"small"}
              minRows={4}
              type={"text"}
              value={message}
              name={"message"}
              label={"Message"}
              onChange={onChangeForm}
              placeholder="Enter your message..."
            />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={handleOnSubmit} text={"Submit"} width={"100%"} />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Messaging;
