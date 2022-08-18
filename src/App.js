import { Suspense } from 'react';
import { lazy } from 'react';
import { Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/Loader/Loader';
import PublicRoute from './components/Routes/PublicRoute';
import PrivateRoute from './components/Routes/PrivateRoute';

const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'));
const LogInView = lazy(() => import('./views/LogInView/LogInView'));
const FilmsView = lazy(() => import('./views/FilmsView/FilmsView'));
const HomeView = lazy(() => import('./views/HomeView/HomeView'));

function App() {
  return (
    <>
      <Switch>
        <Suspense fallback={<Loader />}>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute exact path="/register" restricted redirectTo="/login">
            <RegisterView />
          </PublicRoute>

          <PublicRoute exact path="/login" restricted redirectTo="/films">
            <LogInView />
          </PublicRoute>

          <PrivateRoute exact path="/films" redirectTo="/login">
            <FilmsView />
          </PrivateRoute>
        </Suspense>
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;
