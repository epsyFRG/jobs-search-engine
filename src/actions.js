import {
  searchJobsStart,
  searchJobsSuccess,
  searchJobsFailure,
} from "./searchSlice"

export const fetchJobs = (query) => async (dispatch) => {
  dispatch(searchJobsStart())
  try {
    const response = await fetch(
      `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`
    )
    if (response.ok) {
      const { data } = await response.json()
      dispatch(searchJobsSuccess(data))
    } else {
      dispatch(searchJobsFailure("Error fetching results"))
    }
  } catch (error) {
    dispatch(searchJobsFailure(error.toString()))
  }
}
