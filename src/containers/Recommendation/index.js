import React from 'react';
import { Link } from '@reach/router';

export const Recommendation = () => {
  return (
    <main>
      <h1>You should stay at Lerkendal Student Village</h1>
      <section>
        <h2>Close to campus, night life, and affordable.</h2>
        <img
          src="https://www.sit.no/sites/default/files/lerkendal.jpg"
          alt="Lerkendal studentby"
        />
      </section>

      <Link to="/survey">Didnt like it, find me a new flat!</Link>
    </main>
  );
};

export default Recommendation;
