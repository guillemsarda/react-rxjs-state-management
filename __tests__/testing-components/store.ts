import createStore from '../../src/store-creator';
import { State } from '../../lib';

const counter: State<number> = {
  name: 'counter',
  defaultState: 0,
  setter: (state, { type }) => {
    if (type === 'INCREMENT') return state + 1;
    if (type === 'DECREMENT') return state - 1;
    return state;
  },
};

export default createStore([counter]);
