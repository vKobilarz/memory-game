import React, { FC, FormEvent, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Container from '../../components/Container';
import { useData } from '../../hooks/DataContext';

import { InstructionsContainer, NameContainer, Content } from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}


const Instructions: FC = () => {
  const history = useHistory();
  const query = useQuery();

  const { createUser } = useData();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setNameError(!name);

    if (!name) return;

    createUser({ name });

    switch (query.get('type')) {
      case 'wood':
        history.push('wood01?type=stage-selection');
        break;
      case 'paper':
        history.push('paper01?type=stage-selection');
        break;
      case 'glass':
        history.push('glass01?type=stage-selection');
        break;
      case 'iron':
        history.push('iron01?type=stage-selection');
        break;
      case 'plastic':
        history.push('plastic01?type=stage-selection');
        break;
      default:
        history.push('/introduction');
        break;
    }
  }

  return (
    <Container>
      <Content>
        <InstructionsContainer>
          <h4>INSTRUÇÕES:</h4>
          <p>TODAS AS CARTAS COMEÇAM VIRADAS PARA BAIXO.</p>
          <p>UMA RODADA CONSISTE EM SELECIONAR DUAS CARTAS.</p>
          <p>SE FOR VIRADA DUAS CARTAS IGUAIS, O JOGADOR VENCE A RODADA.</p>
          <p>O JOGO ACABA QUANDO TODOS OS PARES FOREM ENCONTRADOS.</p>
        </InstructionsContainer>
        <NameContainer onSubmit={handleSubmit} error={nameError}>
          <p>INSIRA O SEU NOME:</p>
          <input value={name} onChange={e => setName(e.target.value)} />
          <button type="submit">JOGAR</button>
        </NameContainer>
      </Content>
    </Container>
  );
};

export default Instructions;
