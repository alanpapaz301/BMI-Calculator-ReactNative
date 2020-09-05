import React from "react";
import { Provider } from "react-redux";

import store from "./store/store";

import Form from "./components/Form";
import BmiDisplay from "./components/BmiDisplay";

function App() {
  return (
    <Provider store={store}>
      <Form />
      <BmiDisplay />
    </Provider>
  );
}

export default App;
