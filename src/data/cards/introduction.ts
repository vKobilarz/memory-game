import GlassImg from '../../assets/introduction/glass.png';
import IronImg from '../../assets/introduction/iron.png';
import PaperImg from '../../assets/introduction/paper.png';
import PlasticImg from '../../assets/introduction/plastic.png';
import WoodImg from '../../assets/introduction/wood.png';

import Card from '../../interfaces/Card';

const cards: Card[] = [
  {
    title: 'Vidro'.toUpperCase(),
    name: 'glass',
    image: GlassImg,
    isActive: false,
    isHidden: false,
    description: 'O vidro é feito de uma mistura de matérias-primas naturais. Esse material foi descoberto por acaso, quando, ao fazerem fogueiras na praia, os navegadores perceberam que a areia e o calcário (conchas) se combinaram através da ação da alta temperatura.'.toUpperCase(),
    type: ['primary']
  },
  {
    title: 'Ferro'.toUpperCase(),
    name: 'iron',
    image: IronImg,
    isActive: false,
    isHidden: false,
    description: 'Os minérios de ferro são rochas a partir das quais o ferro metálico pode ser extraído. É um dos elementos de rocha mais abundantes, constituindo cerca de 5% da crosta terrestre e é o 4º elemento mais comum do mundo'.toUpperCase(),
    type: ['primary']
  },
  {
    title: 'Papel'.toUpperCase(),
    name: 'paper',
    image: PaperImg,
    isActive: false,
    isHidden: false,
    description: 'Ele é feito a partir da madeira de uma árvore chamada eucalipto. Todas as árvores possuem em suas células uma substância chamada de celulose – é a partir dela que o papel é fabricado. O eucalipto é cortado e levado para a indústria, onde sua madeira será cortada, descascada e picada.'.toUpperCase(),
    type: ['primary']
  },
  {
    title: 'Plástico'.toUpperCase(),
    name: 'plastic',
    image: PlasticImg,
    isActive: false,
    isHidden: false,
    description: 'O plástico vem das resinas derivadas do petróleo e pertence ao grupo dos polímeros (moléculas muito grandes, com características especiais e variadas).'.toUpperCase(),
    type: ['primary']
  },
  {
    title: 'Madeira'.toUpperCase(),
    name: 'wood',
    image: WoodImg,
    isActive: false,
    isHidden: false,
    description: 'Parte lenhosa das árvores, constituída de fibras e vasos condutores da seiva bruta, sendo um material naturalmente resistente e relativamente leve. Frequentemente utilizado para fins estruturais e de sustentação de construções.'.toUpperCase(),
    type: ['primary']
  },
];

export default cards;