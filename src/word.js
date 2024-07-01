let word;

export default function setupWord(element, initWord) {
  const word = initWord;
  let div;
  for (let i = 0; i <= word.length; i++) {
    div = document.createElement('div');
    div.classList.add('letter-box');
    element.appendChild(div);
  }
}

function isLetterInWord(letter) {}

function revealLetterInWord(letter) {}
