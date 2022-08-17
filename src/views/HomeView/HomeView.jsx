import { NavLink } from 'react-router-dom';

const HomeView = () => {
  return (
    <div>
      <h1>Hello dear customer!</h1>
      <p>
        To proceed with your own films collection you need to sign in or login
      </p>
      <NavLink to="/register" exact>
        Sign up
      </NavLink>
      <NavLink to="/login" exact>
        Sign in
      </NavLink>
    </div>
  );
};

export default HomeView;
