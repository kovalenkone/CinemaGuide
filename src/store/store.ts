import { configureStore } from '@reduxjs/toolkit'
import modalsReducer from './slices/modals.slice'

export const store = configureStore({
  reducer: {
    modals: modalsReducer,
  },
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch