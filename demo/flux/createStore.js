import { createStore } from 'redux';

import counterReducer from './ducks/counter';

export default (data) => {
  return createStore(counterReducer, data);
}
