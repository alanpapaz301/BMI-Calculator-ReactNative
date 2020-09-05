import { createStore } from 'redux';

const INITIAL_STATE = 0;


function bmi(state = 0, action) {
  
  switch (action.type) {
    case 'CALCULATE':
      return parseInt(action.weight) / parseInt(action.height) / parseInt(action.height) *10000;
    default:
      return state;
  }
}

const store = createStore(bmi);

export default store;