import React from 'react';
import { Link } from '@reach/router';
import './style.css';

export const LandingPage = () => {
  return (
    <main className="landingMain">
      <div className="landingContainer">
        <h1>Welcome to Easy Student Housing Trondheim</h1>
        <Link to="/survey">
          <button className="findButton">Find my perfect flat!</button>
        </Link>
      </div>
    </main>
  );
};

export default LandingPage;
