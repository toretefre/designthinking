import React, { useState } from 'react';
import { Link } from '@reach/router';

export const Application = () => {
  const [nightlife, setNightlife] = useState(2000);
  const [campus, setCampus] = useState(2000);
  const [downtown, setDowntown] = useState(2000);
  const [flatmates, setFlatmates] = useState(115);

  return (
    <main>
      <h1>Application</h1>
      <h2>The more sliders to the right, the more affordable it gets!</h2>
      <form>
        Max distance to night life:{' '}
        <input
          type="range"
          defaultValue={nightlife}
          name="points"
          min="0"
          max="5000"
          step="500"
        />
        <p>{nightlife} meters</p>
        <Link to="http://www.ntnu.no/">
          <button>Apply</button>
        </Link>
      </form>
    </main>
  );
};

export default Application;
