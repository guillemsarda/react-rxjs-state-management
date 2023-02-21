import React from 'react';
import useStore from './store';

function Button({ title }: { title: string }) {
  const { methods } = useStore();
  return (
    <button onClick={() => methods.setCounter({ type: title })}>{title}</button>
  );
}

export default Button;
