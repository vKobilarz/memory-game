import React, { FC } from 'react';
import Card from '../../interfaces/Card';

import { Container } from './styles';

interface SelectedCardPanelProps extends Card {
  errorMessage?: string;
  onClick(): void;
}

const SelectedCardPanel: FC<SelectedCardPanelProps> = ({
  description,
  image,
  name,
  title,
  onClick,
  errorMessage,
}) => {
  return (
    <Container onClick={onClick}>
      <h1>{title}</h1>
      <img src={image} alt={name} />
      <p>{description}</p>
      {errorMessage && <p>{errorMessage}</p>}
    </Container>
  );
};

export default SelectedCardPanel;
