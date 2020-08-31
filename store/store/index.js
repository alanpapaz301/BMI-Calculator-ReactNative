import { createStore } from 'redux';

const INITIAL_STATE = 0;


function num(state = 0, action) {
  
  switch (action.type) {
    case 'CALCULATE':
      return parseInt(action.weight) / parseInt(action.height) / parseInt(action.height) *10000;
    default:
      return state;
  }
}

const store = createStore(num);

export default store;