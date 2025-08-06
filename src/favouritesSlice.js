import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  companies: [], // array di nomi aziende preferite
}

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      if (!state.companies.includes(action.payload)) {
        state.companies.push(action.payload)
      }
    },
    removeFavourite: (state, action) => {
      state.companies = state.companies.filter(
        (company) => company !== action.payload
      )
    },
  },
})

export const { addFavourite, removeFavourite } = favouritesSlice.actions
export default favouritesSlice.reducer
