import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './slices/movies.slice'

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch