import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filmsOperations } from '../../redux';
import s from './AddFilmForm.module.css';

const FORMATS = [
  { id: 1, title: 'DVD' },
  { id: 2, title: 'VHS' },
  { id: 3, title: 'Blu-ray' },
];

const AddFilmForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [format, setFormat] = useState('DVD');
  const [actors, setActors] = useState([]);
  const [actorName, setActorName] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = ({ target: { name, value } }) => {
    title && year && format && actors.length > 0
      ? setIsDisabled(false)
      : setIsDisabled(true);
    switch (name) {
      case 'title':
        return setTitle(value);
      case 'year':
        return setYear(value);
      case 'format':
        return setFormat(value);
      case 'actorName':
        return setActorName(value);
      default:
        return;
    }
  };

  const resetValues = () => {
    setTitle('');
    setFormat('');
    setYear('');
    setActors([]);
    setFormat('DVD');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (actors.length === 0 || year < 1950 || year > 2022) {
      return;
    }
    dispatch(filmsOperations.createFilm({ title, year, format, actors }));
    resetValues();
  };

  const handleActorSubmit = () => {
    setActors([...actors, actorName]);
    setActorName('');
  };

  console.log(actors);

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
        <h2 className={s.title}>You can add film by filling fields below</h2>
        <label className={s.label}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            required
            className={s.input}
            placeholder="Title"
          />
        </label>
        <label className={s.label}>
          <input
            type="number"
            name="year"
            value={year}
            onChange={handleChange}
            required
            className={s.input}
            placeholder="Year"
          />
        </label>
        <label className={s.label}>
          Format
          <select
            name="format"
            onChange={handleChange}
            required
            className={s.select}
          >
            {FORMATS.map(({ id, title }) => (
              <option key={id} value={title}>
                {title}
              </option>
            ))}
          </select>
        </label>
        <label className={s.label}>
          <input
            type="text"
            name="actorName"
            value={actorName}
            onChange={handleChange}
            className={s.input}
            placeholder="Actors"
          />
          <button
            type="button"
            onClick={handleActorSubmit}
            className={s.button}
          >
            Add an actor
          </button>
        </label>
        <h3 className={s.title}>Actors you have added to this film</h3>
        <ul className={s.list}>
          {actors &&
            actors.map((actor, index) => (
              <li key={index} className={s.item}>
                <p className={s.text}>{actor}</p>
                <button
                  type="button"
                  className={s.del_btn}
                  // onClick={() => actors.splice(index, 1)}
                >
                  Delete this actor
                </button>
              </li>
            ))}
        </ul>
        <button type="submit" className={s.button} disabled={isDisabled}>
          Add film
        </button>
      </form>
    </div>
  );
};

export default AddFilmForm;
