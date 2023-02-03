export interface State<T> {
  name: string;
  defaultState: T;
  setter: (state: T, payload: any) => T;
}

export interface Store {
  storeStates: { [key: string]: any };
  methods: {
    [key: string]: (payload?: any) => void;
  };
}

export function useStore();

export default function createStore(states: State<any>[] = []): () => Store;
