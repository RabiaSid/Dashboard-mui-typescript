import React, { useState, ChangeEvent, FormEvent } from "react";
import { Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InputField from "../../../components/Input";
import PrimaryButton from "../../../components/button/primary-button";
import InputSelect from "../../../components/input-select";
import DatePickerValue from "../../../components/DatePicker";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate the form data and handle the registration logic here
    console.log("Form data submitted:", formData);
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
          <h4 className="text_grey">Sign Up</h4>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <InputField
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-6">
                <InputField
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <InputSelect />
              </div>
              <div className="col-6">
                <DatePickerValue label="Age*" />
              </div>
            </div>
            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <InputField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <InputField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <PrimaryButton
              // variant="contained"
              // color="primary"
              // type="submit"
              onClick={() => navigate("/")}
              label="Sign Up"
            />
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}
