import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { backward, saveCombinedData, updateEntry } from "../slice/FormSlice";

const Form3 = () => {
  const dispatch = useDispatch();
  const form1Data = useSelector((state) => state.student.form1Data);
  const form2Data = useSelector((state) => state.student.form2Data);
  const editingId = useSelector((state) => state.student.editingId);

  const handleBackward = () => dispatch(backward());

  const handleSubmit = () => {
    if (editingId) {
      dispatch(updateEntry({ id: editingId, ...form1Data, ...form2Data }));
    } else {
      dispatch(saveCombinedData());
    }
  };

  return (
    <Box
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
        Confirm Information
      </Typography>

      <Box sx={{ marginBottom: "16px" }}>
        <Typography variant="body1">First Name: {form1Data.firstName}</Typography>
        <Typography variant="body1">Last Name: {form1Data.lastName}</Typography>
        <Typography variant="body1">Email: {form1Data.email}</Typography>
        <Typography variant="body1">Mobile No: {form1Data.mobileNo}</Typography>
        <Typography variant="body1">College Name: {form2Data.collegeName}</Typography>
        <Typography variant="body1">Address: {form2Data.address}</Typography>
        <Typography variant="body1">Date of Joining: {form2Data.dateOfJoining}</Typography>
        <Typography variant="body1">Course: {form2Data.course}</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "16px",
        }}
      >
        <Button
          onClick={handleBackward}
          variant="outlined"
          color="secondary"
        >
          Back
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          {editingId ? "Update" : "Submit"}
        </Button>
      </Box>
    </Box>
  );
};

export default Form3;
