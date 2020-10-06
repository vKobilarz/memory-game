import React, { FC, useMemo, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import Container from '../../components/Container';
import ICard from '../../interfaces/Card';

import { getCardsByStage } from '../../data/cards/stage';
import getActiveCards from '../../utils/getActiveCards';
import Card from '../../components/Card';
import { useData } from '../../hooks/DataContext';
import SelectedCardPanel from '../../components/SelectedCardPanel';

import { Content, CardContainer, LostPanelContainer } from './styles';

const type = 'paper';
const title = 'SELECIONE SOMENTE OS OBJETOS DE PAPEL';

const Paper01: FC = () => {
  const { setStageData } = useData();
  const history = useHistory();

  const startDate = useMemo<Date>(() => new Date(), []);

  const [selectedCardPanel, setSelectedCardPanel] = useState<ICard | null>(
    null,
  );
  const [cards, setCards] = useState<ICard[]>(() => {
    const cards = getCardsByStage({ type: 'paper', stage: 1 });
    console.log(cards);
    return cards;
  });
  const [attempts, setAttempts] = useState(0);

  const [errorMessage, setErrorMessage] = useState('');
  const [lostPanel, setLostPanel] = useState(false);

  function checkIfUserWonTheStage(cards: ICard[]) {
    const notHiddenCards = cards.filter(
      c => !c.isHidden && c.type.some(ct => ct === type),
    );

    const totalTime = new Date().getTime() - startDate.getTime();

    if (notHiddenCards.length === 0) {
      setStageData({
        totalGuesses: attempts,
        totalTimeSeconds: totalTime / 1000,
        stage: 'paper1',
      });

      history.push('/glass01');
    }
  }

  function checkIfUserWonTheRound(cards: ICard[]) {
    setAttempts(attempts + 1);
    const selectedCards = getActiveCards(cards);

    if (selectedCards.length < 2) {
      return;
    }

    const successOnGuess = selectedCards[0].name === selectedCards[1].name;

    const selectedIndexes: number[] = cards.reduce((a, e, i) => {
      if (e.isActive)
        // @ts-ignore
        a.push(i);
      return a;
    }, []);

    const updatedCards: ICard[] = [...cards];

    selectedIndexes.forEach(index => {
      updatedCards[index] = {
        ...cards[index],
        isActive: false,
        isHidden: successOnGuess,
      };
    });

    setTimeout(() => {
      if (successOnGuess) {
        const playerLostTheGame =
          updatedCards.filter(
            uc => !uc.isHidden && uc.type.some(t => t !== type),
          ).length === 0;

        if (playerLostTheGame) {
          setLostPanel(playerLostTheGame);
        } else {
          setSelectedCardPanel(selectedCards[0]);

          setErrorMessage(
            selectedCards[0].type.some(t => t !== type) ? title : '',
          );
        }
      }

      setCards(updatedCards);
    }, 2000);
  }

  function flipCard(cardIndex: number) {
    const selectedCards = getActiveCards(cards);

    if (selectedCards.length >= 2) {
      return;
    }

    const card = cards[cardIndex];

    if (card.isActive || card.isHidden) {
      return;
    }

    const updatedCards = [...cards];
    updatedCards[cardIndex] = {
      ...card,
      isActive: !card.isActive,
    };

    setCards(updatedCards);
    checkIfUserWonTheRound(updatedCards);
  }

  function handlePanelClick() {
    setSelectedCardPanel(null);

    checkIfUserWonTheStage(cards);
  }

  return (
    <Container title={title}>
      <CardContainer>
        {lostPanel ? (
          <LostPanelContainer>
            <h4>VOCÊ SELECIONOU TODOS OS ITENS INCORRETOS E PERDEU A FASE.</h4>
            <Link to="/">CONTINUAR</Link>
          </LostPanelContainer>
        ) : selectedCardPanel ? (
          <SelectedCardPanel
            {...selectedCardPanel}
            errorMessage={errorMessage}
            onClick={handlePanelClick}
          />
        ) : (
          <Content>
            {cards.map((card, i) => (
              <Card
                key={`${card.name}_${i}`}
                {...card}
                flipCard={() => flipCard(i)}
              />
            ))}
          </Content>
        )}
      </CardContainer>
    </Container>
  );
};

export default Paper01;
