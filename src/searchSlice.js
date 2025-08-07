import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  jobs: [],
  loading: false,
  error: null,
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchJobsStart: (state) => {
      state.loading = true
      state.error = null
    },
    searchJobsSuccess: (state, action) => {
      state.loading = false
      state.jobs = action.payload
    },
    searchJobsFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    clearJobs: (state) => {
      state.jobs = []
      state.error = null
      state.loading = false
    },
  },
})

export const {
  searchJobsStart,
  searchJobsSuccess,
  searchJobsFailure,
  clearJobs,
} = searchSlice.actions
export default searchSlice.reducer
