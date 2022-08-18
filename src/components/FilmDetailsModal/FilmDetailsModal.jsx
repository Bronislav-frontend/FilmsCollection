import { useEffect } from 'react';
import closeImg from '../../assets/cancel.svg';
import s from './FilmDetails.module.css';

const FilmDetailsModal = ({ filmInfo, onClose }) => {
  console.log(filmInfo);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  const onKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return (
    <div className={s.backdrop} onClick={onBackdropClick}>
      <div className={s.modal}>
        <div>
          <h2>Title: {filmInfo.title}</h2>
          <p>Year: {filmInfo.year}</p>
          <p>Format: {filmInfo.format}</p>
        </div>
        <div className={s.cast}>
          <h3>Cast:</h3>
          <ul>
            {filmInfo.actors &&
              filmInfo.actors.map(({ id, name }) => (
                <li key={id}>
                  <p>{name}</p>
                </li>
              ))}
          </ul>
        </div>
        <img
          className={s.close_icon}
          src={closeImg}
          alt="close film's details"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default FilmDetailsModal;
