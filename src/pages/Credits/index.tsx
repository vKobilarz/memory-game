import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';

import { CreditsContainer, Content } from './styles';

const Credits: React.FC = () => {
  return (
    <Container>
      <Content>
        <CreditsContainer>
          <h1>CRÉDITOS</h1>
          <p>CARLOS HENRIQUE - carlos.hennry18@gmail.com</p>
          <p>FELIPE KOSLOSKI KOGA - fkoga@alunos.utfpr.edu.br</p>
          <p>VINICIUS KOBILARZ - vkobilarz@alunos.utfpr.edu.br</p>

          <Link to="/">VOLTAR AO MENU PRINCIPAL</Link>
        </CreditsContainer>
      </Content>
    </Container>
  );
};

export default Credits;
