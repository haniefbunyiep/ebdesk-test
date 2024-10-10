import { createSlice } from '@reduxjs/toolkit';
import { deleteAccToken, deleteReffToken } from '@/config/cookies';

interface userState {
  userData: {
    name: string;
    email: string;
  } | null;
}

const initialState: userState = {
  userData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoginData(state, action) {
      state.userData = action.payload;
    },
    logout(state) {
      state.userData = null;
      deleteAccToken();
      deleteReffToken();
    },
  },
});

export const { setLoginData, logout } = userSlice.actions;

export default userSlice;
