import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api/v1/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('films/register', async credentials => {
  try {
    const { data } = await axios.post('users', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return credentials.rejectWithValue(error);
  }
});

const logIn = createAsyncThunk('films/login', async credentials => {
  try {
    const { data } = await axios.post('sessions', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return credentials.rejectWithValue(error);
  }
});

const operations = {
  register,
  logIn,
};

export default operations;
