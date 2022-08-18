import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filmsOperations } from '../../redux';
import s from './ImportFilmsInput.module.css';

const ImportFilmsInput = () => {
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(true);
  const formData = new FormData();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(filmsOperations.importFilms(formData));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <h2 className={s.title}>Or you can dowload .txt file</h2>
        <input
          type="file"
          onChange={e => {
            formData.append('movies', e.target.files[0], 'movies.txt');
            setIsDisabled(false);
          }}
        />
        <button type="submit" disabled={isDisabled} className={s.button}>
          Add films
        </button>
      </form>
    </>
  );
};

export default ImportFilmsInput;
