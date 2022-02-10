import React from 'react';

// Generates random colours any time it's called
const randomColour = () => '#' + ((Math.random() * 0xffffff) << 0).toString(16);

export const MemoButton = React.memo(({ onClick, children }) => (
  <button onClick={onClick} style={{ background: randomColour() }}>
    {children}
  </button>
));