import React, { FC } from 'react';

import { Container as ContainerStyle, Content, TitleContainer } from './styles';

interface IContainer {
  title?: string;
}

const Container: FC<IContainer> = ({ children, title }) => {
  return (
    <ContainerStyle>
      {title && (
        <TitleContainer>
          <h4>{title}</h4>
        </TitleContainer>
      )}
      <Content>{children}</Content>
    </ContainerStyle>
  );
};

export default Container;
