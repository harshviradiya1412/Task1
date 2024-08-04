import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  stepValue: 0,
  form1Data: {},
  form2Data: {},
  combinedData: [],
  editingId: null,
};

export const formSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setForm1Data: (state, action) => {
      state.form1Data = action.payload;
    },
    setForm2Data: (state, action) => {
      state.form2Data = action.payload;
    },
    fordWard: (state) => {
      state.stepValue += 1;
    },
    backward: (state) => {
      state.stepValue -= 1;
    },
    saveCombinedData: (state) => {
      const newEntry = {
        id: uuidv4(),
        ...state.form1Data,
        ...state.form2Data,
      };
      const existingData = JSON.parse(localStorage.getItem("formData")) || [];
      existingData.push(newEntry);
      localStorage.setItem("formData", JSON.stringify(existingData));
      // state.combinedData = existingData;
      // state.stepValue = 0;
      // state.form1Data = {};
      // state.form2Data = {};
      // state.editingId = null;
      Object.assign(state, initialState, { combinedData: existingData });

    },
    loadFormData: (state) => {
      state.combinedData = JSON.parse(localStorage.getItem("formData")) || [];
    },
    setEntryForEdit: (state, action) => {
      const entry = state.combinedData.find(
        (entry) => entry.id === action.payload
      );
      if (entry) {
        state.form1Data = {
          firstName: entry.firstName,
          lastName: entry.lastName,
          email: entry.email,
          mobileNo: entry.mobileNo,
        };
        state.form2Data = {
          collegeName: entry.collegeName,
          address: entry.address,
          dateOfJoining: entry.dateOfJoining,
          course: entry.course,
        };
        state.editingId = entry.id;
      }
    },
    updateEntry: (state, action) => {
      const { id, ...updatedFields } = action.payload;
      const updatedData = state.combinedData.map((entry) =>
        entry.id === id ? { ...entry, ...updatedFields } : entry
      );
      localStorage.setItem("formData", JSON.stringify(updatedData));
      state.combinedData = updatedData;
      state.stepValue = 0;
      state.form1Data = {};
      state.form2Data = {};
      state.editingId = null;
    },
    deleteEntry: (state, action) => {
      const idToDelete = action.payload;
      state.combinedData = state.combinedData.filter(
        (entry) => entry.id !== idToDelete
      );
      localStorage.setItem("formData", JSON.stringify(state.combinedData));
    },
  },
});

export const {
  fordWard,
  backward,
  setForm1Data,
  setForm2Data,
  saveCombinedData,
  loadFormData,
  deleteEntry,
  updateEntry,
  setEntryForEdit,
} = formSlice.actions;

export default formSlice.reducer;
