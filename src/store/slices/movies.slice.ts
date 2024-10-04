import { createSlice } from "@reduxjs/toolkit";

export interface MoviesState {
  movies: string[]
}

const initialState: MoviesState = {
  movies: []
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
  }
})

export const {  } = moviesSlice.actions
export default moviesSlice.reducer