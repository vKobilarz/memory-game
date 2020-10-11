import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import { Content } from '../Tutorial/styles';

const Tutorial: React.FC = () => {
  return (
    <Container>
      <Content>
        <video style={{ height: '80%' }} controls>
          <source src="videos/tutorial.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
        <Link to="/">VOLTAR AO MENU PRINCIPAL</Link>
      </Content>
    </Container>
  );
};

export default Tutorial;
