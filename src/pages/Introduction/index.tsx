import React, { FC, useMemo, useState } from 'react';

import Container from '../../components/Container';
import ICard from '../../interfaces/Card';

import cardsData from '../../data/cards/introduction';
import shuffleArray from '../../utils/shuffleArray';
import getActiveCards from '../../utils/getActiveCards';
import Card from '../../components/Card';
import { useData } from '../../hooks/DataContext';

import { Content, CardContainer } from './styles';

const Introduction: FC = () => {
  const { setIntroductionData } = useData();

  const startDate = useMemo<Date>(() => new Date(), []);

  const [cards, setCards] = useState<ICard[]>(() => {
    const shuffledCards = [...cardsData, ...cardsData];

    return shuffleArray(shuffledCards);
  });
  const [attempts, setAttempts] = useState(0);

  function checkIfUserWonTheStage(cards: ICard[]) {
    const notHiddenCards = cards.filter(c => !c.isHidden);

    const totalTime = new Date().getTime() - startDate.getTime();

    if (notHiddenCards.length === 0) {
      setIntroductionData({
        totalGuesses: attempts,
        totalTimeSeconds: totalTime / 1000,
      });
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
      setCards(updatedCards);
      checkIfUserWonTheStage(updatedCards);
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

  return (
    <Container>
      <CardContainer>
        <Content>
          {cards.map((card, i) => (
            <Card
              key={`${card.name}_${i}`}
              {...card}
              flipCard={() => flipCard(i)}
            />
          ))}
        </Content>
      </CardContainer>
    </Container>
  );
};

export default Introduction;
