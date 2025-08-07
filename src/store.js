import { configureStore } from "@reduxjs/toolkit"
import favouritesReducer from "./favouritesSlice"
import searchReducer from "./searchSlice"

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    search: searchReducer,
  },
})

export default store
