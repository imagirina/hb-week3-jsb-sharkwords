import './style.css';
import getRandomWord from './src/randomWord.js';
import setSharkImage from './src/sharkImage.js';
import { setupWord, isLetterInWord } from './src/word.js';

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {
  let numWrong = 0;
  setSharkImage(document.getElementById('shark-img'), numWrong);

  const word = getRandomWord();
  setupWord(document.querySelector('#word-container'), word);

  console.log(isLetterInWord(word, 'a'));

  // for debugging:
  console.log(`++++++++++++ WORD: ${word}`);
};

initSharkwords();
