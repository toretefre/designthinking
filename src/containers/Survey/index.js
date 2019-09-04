import React from 'react';
import { Link } from '@reach/router';

export const Survey = () => {
  return (
    <main>
      <h1>Survey</h1>
      <h2>The more sliders to the right, the more affordable it gets!</h2>
      <form>
        Max distance to night life:{' '}
        <input type="range" name="points" min="0" max="5000" step="500" />
        <br />
        Max distance to campus:{' '}
        <input type="range" name="points" min="0" max="5000" step="500" />
        <br />
        Max distance to Trondheim Torg (downtown):{' '}
        <input type="range" name="points" min="0" max="5000" step="500" />
        <br />
        What are the maximum number of people you could share a flat with?
        <input type="range" name="points" min="1" max="116" step="1" />
        <br />
        <Link to="/recommendation">
          <button>Find my perfect flat!</button>
        </Link>
      </form>
    </main>
  );
};

export default Survey;
