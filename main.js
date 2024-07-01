import './style.css';
import getRandomWord from './src/randomWord.js';
import setSharkImage from './src/sharkImage.js';
import { setupWord, isLetterInWord, revealLetterInWord } from './src/word.js';
import setupGuesses from './src/guess.js';

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

let numWrong = 0;

const handleGuess = (guessEvent, letter) => {
  const sharkImgEl = document.getElementById('shark-img');
  // Disable button after click
  const button = guessEvent.target;
  button.setAttribute('disabled', true);
  // Handle guesses
  if (isLetterInWord(letter)) {
    revealLetterInWord(letter);
  } else {
    numWrong += 1;
    setSharkImage(sharkImgEl, numWrong);
  }
};

const initSharkwords = () => {
  let numWrong = 0;
  setSharkImage(document.getElementById('shark-img'), numWrong);

  const word = getRandomWord();
  setupWord(document.querySelector('#word-container'), word);
  setupGuesses(document.querySelector('#letter-buttons'), handleGuess);

  // for debugging:
  console.log(`++++++++++++ WORD: ${word}`);
};

initSharkwords();
