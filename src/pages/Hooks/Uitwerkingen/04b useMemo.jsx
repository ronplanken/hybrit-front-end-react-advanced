import React, { useCallback, useState } from 'react';
import { MemoButton } from '../Oefeningen/04 MemoButton';

const functions: Set<any> = new Set();

// Remove <React.Strictmode> from index.tsx to check this file.

export const MemoTester = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const incrementStep = useCallback(() => setStep((prevStep) => prevStep + 1), []);
  const increment = useCallback(() => setCount((prevCount) => prevCount + step), [ step ]);

  functions.add(incrementStep);
  functions.add(increment);

  return (
    <div>
      <div> Delta is {step} </div>
      <div> Counter is {count} </div>
      <br />
      <div>
        <MemoButton onClick={incrementStep}>Increment Delta</MemoButton>
        <MemoButton onClick={increment}>Increment Counter</MemoButton>
      </div>
      <br />
      <div> Newly Created Functions: {functions.size - 2} </div>
    </div>
  );
};
