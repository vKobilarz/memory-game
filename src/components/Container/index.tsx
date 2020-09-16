import React, { FC } from 'react';

import { Container as ContainerStyle, Content } from './styles';

const Container: FC = ({ children }) => {
  return (
    <ContainerStyle>
      <Content>{children}</Content>
    </ContainerStyle>
  );
};

export default Container;
