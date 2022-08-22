import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
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
      if (searchWord.trim('') === '') return toast.warn('Enter something');
      if (searchWord.length === 1)
        return toast.warn('Search must contain more then 1 symbol');
      dispatch(filmsOperations.fetchFilmsList(`search=${searchWord.trim('')}`));
      setSearchWord('');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchWord.trim('') === '') return toast.warn('Enter something');
    if (searchWord.length === 1)
      return toast.warn('Search must contain more then 1 symbol');
    dispatch(filmsOperations.fetchFilmsList(`search=${searchWord.trim('')}`));
    setSearchWord('');
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
      <button
        className={s.back}
        type="button"
        onClick={() => {
          dispatch(filmsOperations.fetchFilmsList(`sort=year`));
        }}
      >
        <p>Main page</p>
      </button>
    </label>
  );
};

export default SearchInput;
