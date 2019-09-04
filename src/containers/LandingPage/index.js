import React from 'react';
import { Link } from '@reach/router';

export const LandingPage = () => {
  return (
    <main>
      <h1>Welcome to Easy Student Housing Trondheim</h1>
      <Link to="/survey">
        <button>Find my perfect flat!</button>
      </Link>
    </main>
  );
};

export default LandingPage;
