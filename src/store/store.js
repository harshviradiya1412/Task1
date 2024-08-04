import { configureStore } from '@reduxjs/toolkit'
import FormSlice from '../slice/FormSlice'

export const store = configureStore({
  reducer: {
    student: FormSlice,
  },
})