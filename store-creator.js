// Source https://isamatov.com/react-rxjs-shared-state/
import { useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';

function createStore(states = []) {
  const subjectsArray = Array(states.length).fill(null);

  return function useStore() {
    subjectsArray.forEach((sub, i, arr) => {
      if (!sub) {
        /* Without this check, we will re-subscribe to a new Subject 
        with value 0 and therefore the store will not work */
        const state = states[i];
        arr[i] = new BehaviorSubject(state.defaultState);
      }
    });
    const statesArray = states.map((st) => {
      // Array of React States
      return { name: st.name, reactState: useState(st.defaultState) };
    });

    useEffect(() => {
      const subscriptionsArray = subjectsArray.map((subj, i) => {
        return subj.subscribe(statesArray[i].reactState[1]);
      });
      // This will be used when the component is unmounted
      return () => {
        subscriptionsArray.forEach((sub) => {
          if (sub) {
            sub.unsubscribe();
          }
        });
      };
    }, []);

    const storeStates = statesArray.reduce((acc, state) => {
      acc[state.name] = state.reactState[0];
      return acc;
    }, {});

    const methods = states.reduce((acc, st, i) => {
      function setter(fn) {
        return function (payload) {
          const nextValue = fn(storeStates[st.name], payload);
          subjectsArray[i].next(nextValue);
        };
      }
      acc[st.name + 'Setter'] = setter(st.setter);
      return acc;
    }, {});

    return { storeStates, methods };
  };
}

export default createStore;
