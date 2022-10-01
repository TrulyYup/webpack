import('./style.scss');
import items from './cardArray';
import { createCards } from './createCard';

const cards = document.querySelector('.templateCards');

items.map(card => {
	cards.appendChild(createCards(card))
})
