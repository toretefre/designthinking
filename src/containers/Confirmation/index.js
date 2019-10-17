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
        <ul>
          <li>Close to campus</li>
          <li>Night life</li>
          <li>Newly built (2015)</li>
        </ul>
        <img
          src="https://www.sit.no/sites/default/files/lerkendal.jpg"
          alt="Lerkendal student village"
        />
      </section>
      <h2>Room details</h2>
      <ul>
        <li>Third floor</li>
        <li>Room 303</li>
        <li>Shared bathroom with 2 other students</li>
        <li>Shared common areas with 5 other students</li>
      </ul>
      Floor plan for your room below, you will have to bring your own bed.
      <br />
      <img src={floorplan} alt="Floorplan - room 303" />
      <h2>Flatmates</h2>
      <p>Below is a list of your flat mates, we think you'll love them!</p>
      <ul>
        <li>Philip, studies the same as you</li>
        <li>Svenn, beer pong enthusiast</li>
        <li>Jonas, football fan</li>
        <li>Tore, allergic to unicorns</li>
      </ul>
    </main>
  );
};

export default Confirmation;
