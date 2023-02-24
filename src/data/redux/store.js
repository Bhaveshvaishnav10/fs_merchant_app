import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slice/authSlice';

const store = configureStore({
  reducer: {authSlice: authSlice},
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;
