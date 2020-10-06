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
  onClick,
  errorMessage,
}) => {
  return (
    <Container onClick={onClick}>
      <img src={image} alt={name} />
      <p>{description}</p>
      {errorMessage && <p>{errorMessage}</p>}
    </Container>
  );
};

export default SelectedCardPanel;
