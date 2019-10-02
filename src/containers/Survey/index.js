import React, { useState } from 'react';
import { Link } from '@reach/router';

export const Survey = () => {
  const [distances, setDistances] = useState({
    nightlife: 2000,
    campus: 2000,
    downtown: 2000,
    flatmates: 115
  });

  return (
    <main>
      <h1>Survey</h1>
      <h2>The more sliders to the right, the more affordable it gets!</h2>
      <form>
        Max distance to night life:{' '}
        <input
          type="range"
          value={distances.nightlife}
          name="points"
          min="0"
          max="5000"
          step="500"
        />
        <p>{distances.nightlife} meters</p>
        <br />
        Max distance to campus:{' '}
        <input
          type="range"
          value={distances.campus}
          name="points"
          min="0"
          max="5000"
          step="500"
        />
        <p>{distances.campus} meters</p>
        <br />
        Max distance to Trondheim Torg (downtown):{' '}
        <input
          type="range"
          value={distances.downtown}
          name="points"
          min="0"
          max="5000"
          step="500"
        />
        <p>{distances.downtown} meters</p>
        <br />
        What are the maximum number of people you could share a flat with?
        <input
          type="range"
          value={distances.flatmates}
          name="points"
          min="1"
          max="116"
          step="1"
        />
        <p>{distances.flatmates} flatmates</p>
        <br />
        <Link to="/recommendation">
          <button>Find my perfect flat!</button>
        </Link>
      </form>
    </main>
  );
};

export default Survey;
