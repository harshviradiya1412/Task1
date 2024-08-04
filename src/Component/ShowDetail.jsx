import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
} from "@mui/material";
import { deleteEntry, loadFormData, setEntryForEdit } from "../slice/FormSlice";

const ShowDetail = () => {
  const dispatch = useDispatch();
  const combinedData = useSelector((state) => state.student.combinedData);

  useEffect(() => {
    dispatch(loadFormData());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteEntry(id));
  };

  const handleEdit = (id) => {
    dispatch(setEntryForEdit(id));
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ maxHeight: 400, overflowY: "auto" }}
    >
      <div style={{ overflowX: "auto" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ whiteSpace: "nowrap" }}>ID</TableCell>
              <TableCell sx={{ whiteSpace: "nowrap" }}>First Name</TableCell>
              <TableCell sx={{ whiteSpace: "nowrap" }}>Last Name</TableCell>
              <TableCell sx={{ whiteSpace: "nowrap" }}>Email</TableCell>
              <TableCell sx={{ whiteSpace: "nowrap" }}>College Name</TableCell>
              <TableCell sx={{ whiteSpace: "nowrap" }}>
                Date of Joining
              </TableCell>
              <TableCell sx={{ whiteSpace: "nowrap" }}>Course</TableCell>
              <TableCell sx={{ whiteSpace: "nowrap" }}>Mobile No</TableCell>
              <TableCell sx={{ whiteSpace: "nowrap" }}>Address</TableCell>
              <TableCell sx={{ whiteSpace: "nowrap" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {combinedData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.collegeName}</TableCell>
                <TableCell>{row.dateOfJoining}</TableCell>
                <TableCell>{row.course}</TableCell>
                <TableCell>{row.mobileNo}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(row.id)} color="primary">
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(row.id)}
                    color="secondary"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TableContainer>
  );
};

export default ShowDetail;
