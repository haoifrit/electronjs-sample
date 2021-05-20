import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from '../features/logins/loginSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    logins: loginReducer,
  },
});
