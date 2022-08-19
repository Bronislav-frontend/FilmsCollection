import { createSlice } from '@reduxjs/toolkit';
import { filmsOperations } from '../index';
import { toast } from 'react-toastify';

const initialState = {
  filmsArray: [],
  film: {},
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  extraReducers: {
    [filmsOperations.fetchFilmsList.fulfilled](state, { payload }) {
      payload?.data.data.length === 0
        ? toast.error('Sorry, I have not found any film')
        : toast.success(
            `${payload.data.data.length} films of your collection were downloaded`,
          );
      state.filmsArray = payload.data.data;
    },
    [filmsOperations.importFilms.fulfilled](state, { payload }) {
      toast.success('YEY, file successfully imported');
      return {
        ...state,
        filmsArray: payload.data,
      };
    },
    [filmsOperations.deleteFilm.fulfilled](state, { payload }) {
      toast.success('You have deleted choosen film from your collection');
      state.filmsArray = state.filmsArray.filter(({ id }) => id !== payload);
    },
    [filmsOperations.createFilm.fulfilled](state, { payload }) {
      if (payload.status === 0) {
        toast.error(
          `Occured an error while adding film: ${payload.error.code}`,
        );
        return;
      }
      toast.success('YEY, you added a new film!');
      state.filmsArray = [payload.data, ...state.filmsArray];
    },
    [filmsOperations.showFilm.fulfilled](state, { payload }) {
      state.film = payload.data;
    },
  },
});

export default filmsSlice.reducer;
