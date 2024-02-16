import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: { isOpen: false , email: '',isLoggedIn:false},
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    logIn: (state, action) => {
      state.email = action.payload;
      state.isLoggedIn=true;
      
    },
  },
});

export const { openModal, closeModal , logIn } = modalSlice.actions;

export default modalSlice.reducer;