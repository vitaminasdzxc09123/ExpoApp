import React from 'react';
import {Provider} from 'react-redux';
import { AppStateProvider } from './src/context/AppState/AppStateProvider';
import {Navigation} from './src/navigation';
import {store} from './src/store';

export default function App() {
  return (
    <Provider store={store}>
     <AppStateProvider>
        <Navigation />
     </AppStateProvider>
    </Provider>
  );
}
