import React, { Suspense, lazy } from 'react';
import { Router } from '@reach/router';
import './App.css';

const LandingPage = lazy(() => import('./containers/LandingPage'));
const Survey = lazy(() => import('./containers/Survey'));
const Recommendation = lazy(() => import('./containers/Recommendation'));

export const App = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router>
        <LandingPage path="/" />
        <Survey path="/survey" />
        <Recommendation path="/recommendation" />
      </Router>
    </Suspense>
  );
};

export default App;
