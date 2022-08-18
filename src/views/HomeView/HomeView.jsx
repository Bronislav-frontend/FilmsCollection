import { NavLink } from 'react-router-dom';
import s from './HomeView.module.css';

const HomeView = () => {
  return (
    <div className={s.section}>
      <h1>Hello dear customer!</h1>
      <p>
        To proceed with your own films collection you need to sign in or login
      </p>
      <NavLink to="/register" exact className={s.link}>
        Sign up
      </NavLink>
      <NavLink to="/login" exact className={s.link}>
        Sign in
      </NavLink>
    </div>
  );
};

export default HomeView;
