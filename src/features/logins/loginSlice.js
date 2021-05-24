import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login, logout } from './loginApi';

const initialState = {
  username: null,
  status: null,
};

export const loginAsync = createAsyncThunk(
  "login/login",
  async (username) => {
    const response = await login(username);
    return response;
  }
);

export const logoutAsync = createAsyncThunk(
  "login/logout",
  async () => {
    const response = await logout();
    return response;
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    lock: (state) => {
      if (state.username) {
        state.status = "lock";
      } else {
        state.status = "error";
      }
    },
    unlock: (state) => {
      if (state.username) {
        state.status = "unlock";
      } else {
        state.status = "error";
      }
    },
    changeUsername: (state, action) => {
      if (state.username) {
        state.username = action.payload;
      } else {
        state.status = "error";
      }
    }
  },
  extraReducers: (builder) =>{
      builder
        .addCase(loginAsync.pending, (state) => {
          state.status = "ログイン中...";
        })
        .addCase(loginAsync.fulfilled, (state, action) => {
          state.username = action.payload.username;
          state.status = action.payload.status;
        })
        .addCase(logoutAsync.pending, (state) => {
          state.status = "ログアウト中...";
        })
        .addCase(logoutAsync.fulfilled, (state, action) => {
          state.username = action.payload.username;
          state.status = action.payload.status;
        })
  }
});

export const {lock, unlock, changeUsername} = loginSlice.actions;
export const selectUsername = (state) => state.logins.username;
export const selectStatus = (state) => state.logins.status;

export default loginSlice.reducer;