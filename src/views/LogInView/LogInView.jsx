import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authOperations } from '../../redux';
import s from './LogInView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
        <h2 className={s.title}>Sign in form</h2>
        <label className={s.label}>
          Mail
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="test@domain.com"
          />
        </label>

        <label className={s.label}>
          Password
          <input
            className={s.input}
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <div className={s.toggle_wrapper}>
          <label htmlFor="toggle-button">Show Password?</label>
          <input
            type="checkbox"
            id="toggle-button"
            className={s.toggle_btn}
            value={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
        </div>
        <button type="submit" className={s.button}>
          Sign in
        </button>
        <NavLink to="/register" className={s.nav}>
          <p>Don't have an account? </p>
          <button className={s.nav_btn}>Sign up</button>
        </NavLink>
      </form>
    </div>
  );
}
