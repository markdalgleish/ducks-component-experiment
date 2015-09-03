const INCREMENT = 'ducks-component-experiment/counter/INCREMENT';
const DECREMENT = 'ducks-component-experiment/counter/DECREMENT';

const initialState = {
  count: 0
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT: {
      const count = state.count + 1;

      return {
        ...state,
        count
      };
    }

    case DECREMENT: {
      const count = state.count - 1;

      return {
        ...state,
        count
      };
    }

    default: {
      return state;
    }
  }
}

export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}
