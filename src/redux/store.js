import { configureStore } from '@reduxjs/toolkit'
import pageReducer from "./pagesSlice"
import accomodationReducer from "../Pages/Accommodations/accomodationSlice"
import { accomadationsection } from '../Pages/Accommodations/accomodationSlice'
import {exploreReducer} from "../Pages/Explore/exploreSlice"

export const store = configureStore({
  reducer: {
   page:pageReducer,
   accomodations: accomodationReducer,
   explore: exploreReducer
  },
})