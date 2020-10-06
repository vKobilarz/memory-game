import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';

import { InstructionsContainer, Content } from './styles';

const FinishedGame: FC = () => {
  return (
    <Container>
      <Content>
        <InstructionsContainer>
          <h4>PARABÉNS!</h4>
          <p>VOCÊ CONSEGUIU CONCLUIR TODAS AS FASES DO JOGO DA MEMÓRIA!</p>
          <Link to="/">VOLTAR AO MENU PRINCIPAL</Link>
        </InstructionsContainer>
      </Content>
    </Container>
  );
};

export default FinishedGame;
