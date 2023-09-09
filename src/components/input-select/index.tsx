import React, { ChangeEvent, useState } from "react";
import { MenuItem } from "@mui/material";
import InputField from "../Input";

const countries = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  // Add more countries as needed
];

export default function InputSelect() {
  const [formData, setFormData] = useState({
    country: "",
  });

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | { name?: any; value: unknown }
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <InputField
      label="Country"
      name="country"
      value={formData.country}
      onChange={handleChange}
      SelectProps={{
        native: false, // Use a non-native select
      }}
    >
      {countries.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </InputField>
  );
}
