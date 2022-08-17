import { Suspense } from 'react';
import { lazy } from 'react';
import { Switch } from 'react-router-dom';
import PublicRoute from './components/Routes/PublicRoute';
import PrivateRoute from './components/Routes/PrivateRoute';

const RegisterView = lazy(() => import('./views/RegisterView'));
const LogInView = lazy(() => import('./views/LogInView'));
const FilmsView = lazy(() => import('./views/FilmsView/FilmsView'));
const HomeView = lazy(() => import('./views/HomeView/HomeView'));

function App() {
  return (
    <Switch>
      <Suspense fallback={<h2>Loading</h2>}>
        <PublicRoute exact path="/" restricted redirectTo="/login">
          <HomeView />
        </PublicRoute>

        <PublicRoute exact path="/register" restricted redirectTo="/login">
          <RegisterView />
        </PublicRoute>

        <PublicRoute exact path="/login" restricted redirectTo="/films">
          <LogInView />
        </PublicRoute>

        <PrivateRoute path="/films" redirectTo="/login">
          <FilmsView />
        </PrivateRoute>
      </Suspense>
    </Switch>
  );
}

export default App;
