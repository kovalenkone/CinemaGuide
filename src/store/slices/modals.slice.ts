import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalsState {
  isLoginModalOpen: boolean
  isRegisterModalOpen: boolean
  isTrailerModalOpen: boolean
  trailerSrc: string | null
}

const initialState: ModalsState = {
  isLoginModalOpen: false,
  isRegisterModalOpen: false,
  isTrailerModalOpen: false,
  trailerSrc: null,
}

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setIsLoginModalOpen: (state: ModalsState, action: PayloadAction<boolean>) => {
      state.isLoginModalOpen = action.payload
    },
    setIsRegisterModalOpen: (state: ModalsState, action: PayloadAction<boolean>) => {
      state.isRegisterModalOpen = action.payload
    },
    setIsTrailerModalOpen: (state: ModalsState, action: PayloadAction<boolean>) => {
      state.isLoginModalOpen = action.payload
    },
  },
})

export const { setIsLoginModalOpen, setIsRegisterModalOpen, setIsTrailerModalOpen } = modalsSlice.actions
export default modalsSlice.reducer