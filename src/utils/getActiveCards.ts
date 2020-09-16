import Card from '../interfaces/Card';

export default function getActiveCards(cards: Card[]) {
  return cards.filter(card => card.isActive);
}
