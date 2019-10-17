import React, { Suspense, lazy } from 'react';
import { Router } from '@reach/router';
import './App.css';
import Header from './components/Header';

const LandingPage = lazy(() => import('./containers/LandingPage'));
const Survey = lazy(() => import('./containers/Survey'));
const Recommendation = lazy(() => import('./containers/Recommendation'));
const Application = lazy(() => import('./containers/Application'));
const Confirmation = lazy(() => import('./containers/Confirmation'));

export const App = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Header />
      <main>
        <Router>
          <LandingPage path="/" />
          <Survey path="/survey" />
          <Recommendation path="/recommendation" />
          <Application path="/application" />
          <Confirmation path="/confirmation" />
        </Router>
      </main>
    </Suspense>
  );
};

export default App;
