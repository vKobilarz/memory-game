import React from 'react';
import { Link } from 'react-router-dom';

import GlassImg from '../../assets/introduction/glass.png'
import IronImg from '../../assets/introduction/iron.png'
import PaperImg from '../../assets/introduction/paper.png'
import PlasticImg from '../../assets/introduction/plastic.png'
import WoodImg from '../../assets/introduction/wood.png'

import Container from '../../components/Container';

import { Content, IconContainer } from './styles';

const StageSelection = () => {
  return (
    <Container title="SELEÇÃO DE FASES">
      <Content>
        <IconContainer>
          <Link to="/wood01?type=stage-selection">
            <img src={WoodImg} alt="Fases de Madeira" />
            <p>MADEIRA</p>
          </Link>
          <Link to="/paper01?type=stage-selection">
            <img src={PaperImg} alt="Fases de Papel" />
            <p>PAPEL</p>
          </Link>
          <Link to="/glass01?type=stage-selection">
            <img src={GlassImg} alt="Fases de Vidro" />
            <p>VIDRO</p>
          </Link>
          <Link to="/iron01?type=stage-selection">
            <img src={IronImg} alt="Fases de Ferro" />
            <p>FERRO</p>
          </Link>
          <Link to="/plastic01?type=stage-selection">
            <img src={PlasticImg} alt="Fases de Plástico" />
            <p>PLÁSTICO</p>
          </Link>
        </IconContainer>
      </Content>
    </Container>
  );
};

export default StageSelection;
