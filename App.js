import React from 'react';
import { Provider } from 'react-redux';

import store from './store/store';

import Form from './components/Form';

function App() {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
}


export default App;