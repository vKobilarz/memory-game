import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';

import { Content } from './styles';

const Home = () => {
  return (
    <Container>
      <Content>
        <h1>JOGO DA MEMÓRIA</h1>
        <Link to="/instructions">
          <h2>INICIAR</h2>
        </Link>
        <Link to={'/stats'}>
          <h3>RELATÓRIOS</h3>
        </Link>
        <Link to={'/credits'}>
          <h3>CRÉDITOS</h3>
        </Link>
      </Content>
    </Container>
  );
};

export default Home;
