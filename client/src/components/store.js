import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectSlice";

export const store = configureStore({
  reducer: {
    projectsReducer: projectsReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});