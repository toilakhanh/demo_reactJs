import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TOKEN } from '../../utils/const';

export const login = createAsyncThunk('auth/login', async (params) => {
  const response = await axios.post('https://reqres.in/api/login', params);
  return response.data;
});

const initialState = {
  token: '',
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = '';
      localStorage.removeItem(TOKEN);
    },
    saveToken: (state, action) => {
      console.log(action);
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      console.log('fulfilled', action);
      state.token = action.payload.token;
      localStorage.setItem(TOKEN, action.payload.token);
      // state.list = action.payload;
    });
    builder.addCase(login.pending, (state, action) => {
      console.log(action);
      state.error = '';
      // state.list = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log('rejected', action);
      state.error = action.error.message;
      // state.list = action.payload;
    });
  },
});

export const { logout, saveToken } = authSlice.actions;

export default authSlice.reducer;
