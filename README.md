# react-rxjs-state-management

This is a simple npm package to create a React state management tool that uses `BehaviorSubject` from `rxjs`.
</br>
If you want to check how it works, here is [a little demo](https://codesandbox.io/s/github/guillemsarda/react-state-management-with-rxjs).
<br>
Special mention to Iskander Samatov who wrote [this great article](https://isamatov.com/react-rxjs-shared-state/) that helped me to polish some things that I was not doing properly when subscribing.

## How to use it?

In your React's app root folder run `npm i react-rxjs-state-management` to install all the dependencies.

Now, in the `src` directory create a folder called `Store` (we are going to place here our states), and inside this `Store` folder we will create a `store.js` file.

Let's try to create a counter. 

In the `store.js` file:
```
import createStore from 'react-rxjs-state-management';

const counterHandler = { // In the section `The state handler` you can find more about it
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
          methods.setCounter(); // (**)
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
<br>
(**) In the same way, all the setter functions can be accessed with: set + given name (i.e., in camelCase).

## The state handler

The state handler is an object that must have these 3 entries:
- `name`: The state's name (you will use it to access its value).
- `defaultState`: The default state of the corresponding state.
- `setter`: The function that will handle all the state updates. **This function needs to return always the next value.** It takes two arguments:
  - `state`: The value of the previous state.
  - `payload`: The argument passed when the setter method is invoked.

___

**If you find any issues, feel free to make a PR!**

Thanks!😉
