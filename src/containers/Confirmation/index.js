import React, { useState } from 'react';
import floorplan from './floorplan.png';
import { Link } from '@reach/router';

export const Confirmation = () => {
  const [housing, setHousing] = useState('Lerkendal Student Village');

  return (
    <main>
      <h1>You have been accepted for {housing}</h1>
      <section>
        <h2>Features:</h2>
        <p>Close to campus, night life, and affordable.</p>
        <img
          src="https://www.sit.no/sites/default/files/lerkendal.jpg"
          alt="Lerkendal student village"
        />
      </section>

      <h2>Floor plan</h2>
      <p>You have been placed in room 303. This is on the third floor.</p>
      <img src={floorplan} alt="Floorplan - room 303" />
    </main>
  );
};

export default Confirmation;
