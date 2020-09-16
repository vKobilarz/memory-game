import React, { FC, useMemo, useState } from 'react';

import { useHistory } from 'react-router-dom';

import Container from '../../components/Container';
import ICard from '../../interfaces/Card';

import cardsData from '../../data/cards/stage';
import shuffleArray from '../../utils/shuffleArray';
import getActiveCards from '../../utils/getActiveCards';
import Card from '../../components/Card';
import { useData } from '../../hooks/DataContext';

import { Content, CardContainer } from './styles';
import SelectedCardPanel from '../../components/SelectedCardPanel';

const Stage02: FC = () => {
  const { setStage02Data } = useData();
  const history = useHistory();

  const startDate = useMemo<Date>(() => new Date(), []);

  const [selectedCardPanel, setSelectedCardPanel] = useState<ICard | null>(
    null,
  );
  const [cards, setCards] = useState<ICard[]>(() => {
    const shuffledCards = shuffleArray(cardsData).slice(cardsData.length - 14);

    const slicedCards: ICard[] = shuffleArray([
      ...shuffledCards,
      ...shuffledCards,
    ]);

    return slicedCards;
  });
  const [attempts, setAttempts] = useState(0);

  function checkIfUserWonTheStage(cards: ICard[]) {
    const notHiddenCards = cards.filter(c => !c.isHidden);

    const totalTime = new Date().getTime() - startDate.getTime();

    if (notHiddenCards.length === 0) {
      setStage02Data({
        totalGuesses: attempts,
        totalTimeSeconds: totalTime / 1000,
      });

      history.push('/');
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
        setSelectedCardPanel(selectedCards[0]);
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
    <Container>
      <CardContainer>
        {selectedCardPanel ? (
          <SelectedCardPanel
            {...selectedCardPanel}
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

export default Stage02;
