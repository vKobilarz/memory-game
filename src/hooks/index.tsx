import React, { FC } from 'react';

import GlobalStyle from '../styles/global';

import { DataProvider } from './DataContext';

const AppProvider: FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />

      <DataProvider>{children}</DataProvider>
    </>
  );
};

export default AppProvider;
