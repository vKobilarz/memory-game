import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from './hooks';
import Routes from './routes';

const App: FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
