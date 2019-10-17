import React from 'react';
import { Link } from '@reach/router';

export const Application = () => {
  return (
    <main>
      <h1>Application</h1>
      <h2>Please enter your personal information!</h2>
      <form>
        Given name: <input type="text" />
        <br />
        Family name: <input type="text" />
        <br />
        E-mail: <input type="text" />
        <br />
        Phone number: <input type="text" />
        <br />
        <Link to="/confirmation">
          <button>Apply</button>
        </Link>
      </form>
    </main>
  );
};

export default Application;
