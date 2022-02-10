import { Button, Typography } from 'antd';
import React from 'react';

export const CustomHookContainer = ({ initialCount = 0, step = 1 } = {}) => {
  const [ count, setCount ] = React.useState(initialCount);

  const increment = () => setCount((c) => c + step);

  const decrement = () => setCount((c) => c - step);

  return (
    <>
      <Button onClick={decrement}>-</Button>
      <Button onClick={increment}>+</Button>
      <Typography.Paragraph>{count}</Typography.Paragraph>
    </>
  );
};
