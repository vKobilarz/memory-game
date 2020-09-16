import React, { FC } from 'react';

import ICard from '../../interfaces/Card';

import { Container, Front, Back } from './styles';

import BackCardImg from '../../assets/card-back.png';

interface CardProps extends ICard {
  flipCard(): void;
}

const Card: FC<CardProps> = ({
  name,
  description,
  image,
  isActive,
  isHidden,
  flipCard,
}) => {
  return (
    <Container isFlipped={isActive} isHidden={isHidden}>
      <Front onClick={flipCard}>
        <img src={BackCardImg} alt="back-card" />
      </Front>
      <Back>
        <img src={image} alt={name} />
      </Back>
    </Container>
  );
};

export default Card;
