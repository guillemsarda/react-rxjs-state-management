import React from 'react';
import Button from './Button';
import Counter from './Counter';

function App() {
  return (
    <main>
      <Counter />
      <Button title={'INCREMENT'} />
      <Button title={'DECREMENT'} />
    </main>
  );
}

export default App;
