import { Button, Typography } from 'antd';
import React from 'react';

const countReducer = (state, action) => {
  const { type, step } = action;
  switch (type) {
    case 'increment': {
      return {
        ...state,
        count: state.count + step,
      };
    }
    case 'decrement': {
      return {
        ...state,
        count: state.count - step,
      };
    }
    default: {
      throw new Error(`Unsupported action type: ${type}`);
    }
  }
};

export const CustomReducerContainer = () => {
  const step = 1;
  const initialCount = 0;
  
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  });

  const { count } = state;

  const decrement = () => dispatch({type: "bla", step})
  const increment = () => dispatch({type: "increment", step})

  return (
    <>
      <Button onClick={decrement}>-</Button>
      <Button onClick={increment}>+</Button>
      <Typography.Paragraph>{count}</Typography.Paragraph>
    </>
  );
};
