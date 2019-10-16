import React, { useState } from 'react';
import { Link } from '@reach/router';

export const Survey = () => {
  const [nightlife, setNightlife] = useState(2000);
  const [campus, setCampus] = useState(2000);
  const [downtown, setDowntown] = useState(2000);
  const [flatmates, setFlatmates] = useState(115);

  return (
    <main>
      <h1>Survey</h1>
      <h2>The more sliders to the right, the more affordable it gets!</h2>
      <form>
        Max distance to night life:{' '}
        <input
          type="range"
          defaultValue={nightlife}
          onChange={e => setNightlife(e.target.value)}
          name="points"
          min="0"
          max="5000"
          step="500"
        />
        <p>{nightlife} meters</p>
        <br />
        Max distance to campus:{' '}
        <input
          type="range"
          defaultValue={campus}
          onChange={e => setCampus(e.target.value)}
          name="points"
          min="0"
          max="5000"
          step="500"
        />
        <p>{campus} meters</p>
        <br />
        Max distance to Trondheim Torg (downtown):{' '}
        <input
          type="range"
          defaultValue={downtown}
          onChange={e => setDowntown(e.target.value)}
          name="points"
          min="0"
          max="5000"
          step="500"
        />
        <p>{downtown} meters</p>
        <br />
        What are the maximum number of people you could share a flat with?
        <input
          type="range"
          defaultValue={flatmates}
          onChange={e => setFlatmates(e.target.value)}
          name="points"
          min="1"
          max="116"
          step="1"
        />
        <p>{flatmates} flatmates</p>
        <br />
        <Link to="/recommendation">
          <button>Find my perfect flat!</button>
        </Link>
      </form>
    </main>
  );
};

export default Survey;
