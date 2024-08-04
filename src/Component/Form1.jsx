import React, { useState } from "react";
import {
  TextField,
  Box,
  Typography,
  Button,
  Grid,
  InputLabel,
} from "@mui/material";
import { fordWard, setForm1Data } from "../slice/FormSlice";
import { useDispatch, useSelector } from "react-redux";

const Form1 = () => {
  const dispatch = useDispatch();
  const form1Data = useSelector((state) => state.student.form1Data);

  const handleChange = (field) => (e) => {
    dispatch(setForm1Data({ ...form1Data, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fordWard());
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        border: "1px solid gray",
        borderRadius: "8px",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        boxShadow: 2,
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <Typography
        variant="h6"
        sx={{ marginBottom: "16px", textAlign: "center" }}
      >
        User Information
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={6}>
          <InputLabel size="normal">First Name</InputLabel>
          <TextField
            name="firstName"
            variant="outlined"
            value={form1Data.firstName || ""}
            onChange={handleChange("firstName")}
            InputProps={{
              sx: {
                fontSize: "14px",
                color: "#000",
              },
            }}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel size="normal">Last Name</InputLabel>
          <TextField
            name="lastName"
            variant="outlined"
            value={form1Data.lastName || ""}
            onChange={handleChange("lastName")}
            InputProps={{
              sx: {
                fontSize: "14px",
                color: "#000",
              },
            }}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel size="normal">Email</InputLabel>
          <TextField
            name="email"
            variant="outlined"
            value={form1Data.email || ""}
            onChange={handleChange("email")}
            type="email"
            size="small"
            InputProps={{
              sx: {
                fontSize: "14px",
                color: "#000",
              },
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel size="normal">Mobile No</InputLabel>
          <TextField
            name="mobileNo"
            variant="outlined"
            value={form1Data.mobileNo || ""}
            onChange={handleChange("mobileNo")}
            type="tel"
            size="small"
            InputProps={{
              sx: {
                fontSize: "14px",
                color: "#000",
              },
            }}
            fullWidth
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "16px",
        }}
      >
        <Button disabled variant="outlined" color="secondary">
          Back
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Form1;
