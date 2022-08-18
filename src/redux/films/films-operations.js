import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api/v1/';

const fetchFilmsList = createAsyncThunk(
  'fetchFilms',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `movies?${arg}&order=DESC&offset=0`,
      );
      return { data };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const importFilms = createAsyncThunk(
  'importFilms',
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('movies/import', args);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const deleteFilm = createAsyncThunk(
  'deleteFilm',
  async (filmId, { rejectWithValue }) => {
    try {
      await axios.delete(`movies/${filmId}`);
      return filmId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const createFilm = createAsyncThunk(
  'createFilm',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('movies', arg);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const showFilm = createAsyncThunk(
  'showFilm',
  async (filmId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`movies/${filmId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const operations = {
  fetchFilmsList,
  importFilms,
  createFilm,
  deleteFilm,
  showFilm,
};

export default operations;
