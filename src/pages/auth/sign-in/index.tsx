import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Grid, Typography, Paper } from "@mui/material";
import InputField from "../../../components/Input";
import PrimaryButton from "../../../components/button/primary-button";

export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <h4 className='text_grey'>
            Sign In
          </h4>
          <InputField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PrimaryButton
            onClick={() => navigate("/dashboard")}
            label="Sign In"
          />
          <PrimaryButton onClick={() => navigate("/sign-up")} label="Sign Up" />
        </Paper>
      </Grid>
    </Grid>
    // <div className='justify-content-center align-items-center'>
    //     <PrimaryButton variant='contained' onClick={() => navigate('/dashboard') }>
    //         Go To the Dashboard
    //     </PrimaryButton>
    // </div>
  );
}
