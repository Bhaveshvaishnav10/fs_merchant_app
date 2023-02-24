import {createSlice} from '@reduxjs/toolkit';
import {AUTH_SLICE} from '../../../utility/valueConstants';
const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  initialState: initialState,
  name: AUTH_SLICE,
  reducers: {
    authenticateUser: (state, action) => {
      let data = {
        ...state,
        isAuthenticated: action.payload,
      };
      return (state = data);
    },
    authenticateSecondLogin: (state, action) => {
      let data = {
        ...state,
        isSecondLogin: action.payload,
      };
      return (state = data);
    },
  },
});

export const {authenticateUser, authenticateSecondLogin} = authSlice.actions;
export default authSlice.reducer;
