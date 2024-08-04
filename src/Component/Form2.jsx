import React, { useState } from "react";
import {
  TextField,
  Box,
  Typography,
  Button,
  Grid,
  InputLabel,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { backward, fordWard, setForm2Data } from "../slice/FormSlice";

const Form2 = () => {
  const dispatch = useDispatch();
  const form2Data = useSelector((state) => state.student.form2Data);

  const handleChange = (field) => (e) => {
    dispatch(setForm2Data({ ...form2Data, [field]: e.target.value }));
  };

  const handleDateChange = (newValue) => {
    const formattedDate = newValue.format("YYYY-MM-DD");
    dispatch(setForm2Data({ ...form2Data, dateOfJoining: formattedDate }));
  };

  const handleBackward = () => dispatch(backward());

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fordWard());
  };

  return (
    <Box
      component="form"
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
        College Information
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputLabel size="normal">College Name</InputLabel>
          <TextField
            variant="outlined"
            value={form2Data.collegeName || ""}
            onChange={handleChange("collegeName")}
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
        <Grid item xs={12}>
          <InputLabel size="normal">Address</InputLabel>
          <TextField
            variant="outlined"
            value={form2Data.address || ""}
            onChange={handleChange("address")}
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
        <Grid item xs={12}>
          <InputLabel size="normal">Date of Joining</InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={
                form2Data.dateOfJoining ? dayjs(form2Data.dateOfJoining) : null
              }
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <InputLabel size="normal">Course</InputLabel>
          <TextField
            variant="outlined"
            value={form2Data.course || ""}
            onChange={handleChange("course")}
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
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "16px",
        }}
      >
        <Button onClick={handleBackward} variant="outlined" color="secondary">
          Back
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Form2;
