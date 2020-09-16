import React, { FC, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Container from '../../components/Container';
import { useData } from '../../hooks/DataContext';

import { InstructionsContainer, NameContainer, Content } from './styles';

const Instructions: FC = () => {
  const history = useHistory();

  const { createUser } = useData();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setNameError(!name);

    if (!name) return;

    createUser({ name });

    history.push('/introduction');
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
