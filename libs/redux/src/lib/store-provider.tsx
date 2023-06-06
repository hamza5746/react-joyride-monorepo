import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

export const StoreProvider = ({ children }: any) => (
  <Provider store={store}>{children}</Provider>
);
