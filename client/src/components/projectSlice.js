import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import { axiosInstance } from "../config";

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
  const response = await axiosInstance.get("/projects");
  return response;
});

const projectsSlice = createSlice({
  name:"projects",
  initialState:{
    projects: [],
    lpProjectsImage:[],
    status: 'idle',
    error: null
  },
  reducers:{
    projectsData:(state)=>state,
  },
  extraReducers: {
    [fetchProjects.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchProjects.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
     state.projects = action.payload.data;
    },
    [fetchProjects.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
});

export const {projectsData, lpProjectsImageData} = projectsSlice.actions;
export default projectsSlice.reducer;