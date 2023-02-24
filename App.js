import React from 'react';
import {Provider} from 'react-redux';
import store from './src/data/redux/store';
import Root from './src/Root';

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;
