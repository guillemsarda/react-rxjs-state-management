import React from 'react';
import useStore from './store';

function Counter() {
  const { storeStates } = useStore();
  return <h1 data-testid="counter">{storeStates.counter}</h1>;
}

export default Counter;
