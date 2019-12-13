import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { View } from 'react-native';

import './config/ReactotroConfig';

import { store, persistor } from './store';

// import { Container } from './styles';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View />
      </PersistGate>
    </Provider>
  );
}
