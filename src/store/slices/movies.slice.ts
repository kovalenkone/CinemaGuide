import { Movie } from "@/types/movie.type";
import { createSlice } from "@reduxjs/toolkit";

export interface MoviesState {
  randomMovie: Movie | null
  topTenMovies: Movie[]
}

const initialState: MoviesState = {
  randomMovie: null,
  topTenMovies: []
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