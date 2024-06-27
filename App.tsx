import React from "react";
import { store } from "./src/redux/store";
import NavigationContainer from './core/reactNavigation/Navigation';
import { Provider } from 'react-redux';

const App = () => {

  return (
      <Provider store={store}>
        <NavigationContainer />
      </Provider>
  )
};

export default App;
