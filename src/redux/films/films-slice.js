import { createSlice } from '@reduxjs/toolkit';
import { filmsOperations } from '../index';

const initialState = {
  filmsArray: [],
  film: {},
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  extraReducers: {
    [filmsOperations.fetchFilmsList.fulfilled](state, { payload }) {
      state.filmsArray = payload.data.data;
    },
    [filmsOperations.importFilms.fulfilled](state, { payload }) {
      return {
        ...state,
        filmsArray: payload.data,
      };
    },
    [filmsOperations.deleteFilm.fulfilled](state, { payload }) {
      state.filmsArray = state.filmsArray.filter(({ id }) => id !== payload);
    },
    [filmsOperations.createFilm.fulfilled](state, { payload }) {
      state.filmsArray = [payload.data, ...state.filmsArray];
    },
    [filmsOperations.showFilm.fulfilled](state, { payload }) {
      state.film = payload.data;
    },
  },
});

export default filmsSlice.reducer;
