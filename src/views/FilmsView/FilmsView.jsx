import ImportFilmsInput from '../../components/ImportFilmsInput/ImportFilmsInput';
import FilmsCollection from '../../components/FilmsCollection/FilmsCollection';
import AddFilmForm from '../../components/AddFilmForm/AddFilmForm';
import s from './FilmsView.module.css';

const FilmsView = () => {
  return (
    <>
      <FilmsCollection />
      <section className={s.add_section}>
        <AddFilmForm />
        <ImportFilmsInput />
      </section>
    </>
  );
};
export default FilmsView;
