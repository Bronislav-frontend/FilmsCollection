import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filmsOperations } from '../../redux';
import { selectors } from '../../redux';
import SearchInput from '../SearchInput/SearchInput';
import FilmDetailsModal from '../FilmDetailsModal/FilmDetailsModal';
import filmImage from '../../assets/film.jpg';
import s from './FilmsCollection.module.css';

const FilmsCollection = () => {
  const [sortBy, setSortBy] = useState('year');
  const [isModalShown, setIsModalShown] = useState(false);
  const dispatch = useDispatch();
  const films = useSelector(selectors.getFilms);
  const filmDetails = useSelector(state => state.films.film);

  useEffect(() => {
    dispatch(filmsOperations.fetchFilmsList(`sort=${sortBy}`));
  }, [dispatch, sortBy]);

  const handleClick = id => {
    setIsModalShown(true);
    dispatch(filmsOperations.showFilm(id));
  };

  return (
    <section className={s.section}>
      <h2 className={s.title}>Films collection</h2>
      <SearchInput />
      {!films && (
        <p>
          You don`t have any film in your collection yet, but you can add it by
          filling the form or by importing a .txt file
        </p>
      )}
      <div className={s.sort}>
        <p>Sort by</p>
        <select name="sortBy" onChange={e => setSortBy(e.target.value)}>
          <option value="year">Year</option>
          <option value="title">Title</option>
        </select>
      </div>
      <ul className={s.list}>
        {films &&
          films.map(({ id, title, year, format }) => (
            <li key={id} className={s.item} onClick={() => handleClick(id)}>
              <img
                src={filmImage}
                alt="default poster"
                width="140px"
                height="100px"
              ></img>
              <h2 className={s.film_title}>'{title}'</h2>
              <p>Year: {year}</p>
              <p>Format: {format}</p>
              <button
                className={s.btn}
                onClick={() => dispatch(filmsOperations.deleteFilm(id))}
              >
                Delete from collection
              </button>
            </li>
          ))}
      </ul>
      {isModalShown && filmDetails && (
        <FilmDetailsModal
          filmInfo={filmDetails}
          onClose={() => setIsModalShown(false)}
        />
      )}
    </section>
  );
};

export default FilmsCollection;
