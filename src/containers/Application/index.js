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
      <h2>Please enter your personal information!</h2>
      <form>
        Given name: <input type="text" />
        <br />
        Family name: <input type="text" />
        <Link to="/">
          <button>Apply</button>
        </Link>
      </form>
    </main>
  );
};

export default Application;
