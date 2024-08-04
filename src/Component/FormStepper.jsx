import * as React from "react";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import { Box } from "@mui/material";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import { useSelector } from "react-redux";

const CustomIcon = ({ active, completed, icon }) => {
  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      style={{
        backgroundColor: active || completed ? "blue" : "gray",
        color: "white",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5px",
        fontSize: "1rem",
      }}
    >
      {icons[icon]}
    </div>
  );
};

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function FormStepper() {
  const formStep = useSelector((state) => state.student.stepValue);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minheight: "100vh",
          padding: "20px 20px 0 20px",
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            borderRadius: "5px",
            padding: "20px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <Stack spacing={4} sx={{ width: "100%" }}>
            <Stepper activeStep={formStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel
                    StepIconComponent={(props) => <CustomIcon {...props} />}
                  ></StepLabel>
                </Step>
              ))}
            </Stepper>
          </Stack>
        </Box>
        {formStep === 0 && <Form1 />}
        {formStep === 1 && <Form2 />}
        {formStep === 2 && <Form3 />}
      </Box>
    </>
  );
}
