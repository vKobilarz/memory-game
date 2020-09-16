import React, { FC } from 'react';
import Card from '../../interfaces/Card';

import { Container } from './styles';

interface SelectedCardPanelProps extends Card {
  onClick(): void;
}

const SelectedCardPanel: FC<SelectedCardPanelProps> = ({
  description,
  image,
  name,
  onClick,
}) => {
  return (
    <Container onClick={onClick}>
      <img src={image} alt={name} />
      <p>{description}</p>
    </Container>
  );
};

export default SelectedCardPanel;
