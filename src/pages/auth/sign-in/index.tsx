import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Grid, Typography, Paper } from "@mui/material";
import InputField from "../../../components/Input";
import PrimaryButton from "../../../components/button/primary-button";
import { BsArrowRight } from "react-icons/bs";

export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
    checkFormFilled();
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
    checkFormFilled();
  };

  const checkFormFilled = () => {
    if (email && password) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  };

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        background: `var(--transparency-quantinery, rgba(162, 242, 135, 0.4))`,
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} sm={6} lg={4}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <h4 className="text_grey">Sign In</h4>
          <InputField
            label="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {isFormFilled ? ( // Conditionally render the button with the icon
            <PrimaryButton
              onClick={() => navigate("/dashboard")}
              label={
                <>
                  Sign In <BsArrowRight className="ps-2" size={19} />
                </>
              }
            />
          ) : (
            <PrimaryButton
              onClick={() => navigate("/dashboard")}
              label="Sign In"
            />
          )}
          <PrimaryButton onClick={() => navigate("/sign-up")} label="Sign Up" />
        </Paper>
      </Grid>
    </Grid>
  );
}
