export default interface Card {
  title: string;
  name: string;
  image: string;
  isActive: boolean;
  isHidden: boolean;
  description: string;
  type: ('primary' | 'wood' | 'paper' | 'glass' | 'iron' | 'plastic')[]
}
