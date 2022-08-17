import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filmsOperations } from '../../redux';
import s from './SearchInput.module.css';

const SearchInput = () => {
  const [searchWord, setSearchWord] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  const onKeyDown = e => {
    if (e.code === 'Enter') {
      dispatch(filmsOperations.fetchFilmsList(`search=${searchWord}`));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(filmsOperations.fetchFilmsList(`search=${searchWord}`));
  };

  return (
    <label>
      <input
        type="text"
        value={searchWord}
        onChange={e => setSearchWord(e.target.value)}
        className={s.input}
        placeholder="Type here film's title or actor's name"
      />
      <button type="submit" className={s.btn} onClick={handleSubmit}>
        Search
      </button>
    </label>
  );
};

export default SearchInput;
