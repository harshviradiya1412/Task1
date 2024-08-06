import { Box } from "@mui/material";
import React from "react";
import FormStepper from "./Component/FormStepper";
import ShowDetail from "./Component/ShowDetail";
import DragMenu from "./Component/DragMenu";

const App = () => {
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
        {/* <FormStepper /> */}
        {/* <ShowDetail/> */}
        <DragMenu/>
      </Box>
    </>
  );
};

export default App;
