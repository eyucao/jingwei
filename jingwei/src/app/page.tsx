'use client';
import { useState } from 'react';


export default function Home() {
  const [index, setIndex] = useState(11);

  function gamble() {
    setIndex(index + getRandomInt(index));
  }

  function getRandomInt(ceiling: number) {
    return Math.floor(Math.random() * ceiling);
  }

  return (
    <main>
      A truly never ending experience.
      <br></br>
      <p>
        Running score: {index}
      </p>

      <button
        onClick={gamble}>Continue</button>


    </main>
  );
}



