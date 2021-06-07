import buildGAEvent from './utils';

//Used in HEADING
export const welcomeTextGA = () => buildGAEvent('Button', 'User clicked the Welcome text in the heading.');
export const russianIconGA = () => buildGAEvent('Localization icon', 'User changed the localization to Russian.');
export const englishIconGA = () => buildGAEvent('Localization icon', 'User changed the localization to English.');
export const chineseIconGA = () => buildGAEvent('Localization icon', 'User changed the localization to Chinese.');
export const mouseOverTitle = () => buildGAEvent('Mouse enters title', 'User moused over the title.');

//Used in FOTO
export const carouselGA = () => buildGAEvent('Carousel', 'User clicked somewhere in the carousel.');