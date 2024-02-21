import './style.css';
import { CardsModule } from '@/cards.module.ts';

const images = [
  // https://unsplash.com/photos/woman-standing-near-building-TScGhJM716g
  'https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // https://unsplash.com/photos/city-buildings-near-body-of-water-during-daytime-1uWanmgkd5g
  'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // https://unsplash.com/photos/aerial-photography-of-buildings-under-clear-blue-sky-TK5I5L5JGxY
  'https://images.unsplash.com/photo-1552553302-9211bf7f7053?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // https://unsplash.com/photos/people-walking-on-train-station-during-daytime-DXNqAMYUQK8
  'https://images.unsplash.com/photo-1586802949111-73a2b9b3006e?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // https://unsplash.com/photos/brown-and-white-concrete-building-0w41C3byo_A
  'https://images.unsplash.com/photo-1533242016051-93d27b897650?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div tabindex="0" role="tablist" aria-label="Expanding Cards" class="cards js-cards">
    <div tabindex="-1" role="tab"
        aria-description="The Brandenburg Gate, a neoclassical monument in Berlin, with a person walking towards it and several others milling around the square under a partly cloudy sky"
        class="cards_panel cards_panel--cc unsplash" style="--imgUrl: url(${images[0]}); --themeColor: rgba(133, 108, 90, 1)"></div>
    <div tabindex="-1" role="tab"
        aria-description="The Brandenburg Gate, a neoclassical monument in Berlin, with a person walking towards it and several others milling around the square under a partly cloudy sky"
        class="cards_panel cards_panel--cc unsplash" style="--imgUrl: url(${images[1]}); --themeColor: rgba(240, 133, 98, 1)"></div>
    <div tabindex="-1" role="tab"
        aria-description="A view over the tree-lined Tiergarten park in Berlin, with the cityscape in the background including the Fernsehturm (TV tower) and the Berlin Cathedral's dome, under a partly cloudy sky"
        class="cards_panel cards_panel--cc unsplash" style="--imgUrl: url(${images[2]}); --themeColor: rgba(148, 153, 64, 1)"></div>
    <div tabindex="-1" role="tab"
        aria-description="An old Berlin U-Bahn station with an arriving yellow train, passengers waiting on the platform, and the station's information display showing train schedules"
        class="cards_panel cards_panel--cc unsplash" style="--imgUrl: url(${images[3]}); --themeColor: rgba(162, 87, 2, 1)"></div>
    <div tabindex="-1" role="tab"
        aria-description="A close-up view of the exterior of a multi-story brick building with arched and rectangular windows, and a partial view of the signage on the building's facade"
        class="cards_panel cards_panel--cc unsplash" style="--imgUrl: url(${images[4]}); --shadowColor: rgba(211, 158, 103, 1)"></div>
  </div>
`;

document.addEventListener('DOMContentLoaded', () => {
  const elCards = document.querySelector<HTMLDivElement>('.js-cards');

  if (!elCards) {
    throw new Error('No cards found');
  }

  CardsModule.init(elCards);
});
