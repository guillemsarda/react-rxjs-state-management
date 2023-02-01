# react-rxjs-state-management

This is a simple npm package to create a React state management tool that uses `BehaviorSubject` from `rxjs`.

## How to use it?

In your React's app root folder run `npm i react-rxjs-state-management` to install all the dependencies.

Now, in the `src` directory create a folder called `Store` (we are going to place here our states), and inside this `Store` folder we will create a `store.js` file.

Let's try to create a counter. 

In the `store.js` file:
```
import createStore from 'react-rxjs-state-management';

const counterHandler = {
  name: 'counter',
  defaultState: 0,
  setter: function (state, payload) {
    return state + 1;
  },
};

export default createStore([counterHandler]); // Notice that we have to place our states in an array
```

With this config done, our store has been built. The `createStore` function creates a `useStore` hook that can be used anywhere in our app.

The `useStore` hook returns an object that contains `storeStates` (an object with all the created states) and `methods` (an object with all the setter functions).

To access the different states and their setters we can do this:

```
import useStore from './Store/store';

export default function Button() {
  const { methods, storeStates } = useStore();
  return (
    <>
      <button
        onClick={() => {
          methods.counterSetter(); // (**)
        }}
      >
        Increment
      </button>
      <h1>{storeStates.counter}</h1> // (*)
    </>
  );
}
```

(*) Notice that all the states can be accessed with the name that we have given it previously.
(**) In the same way, all the setter functions can be accessed with: given name + Setter.

**If you find any issues, feel free to make a PR!**

Thanks!😉