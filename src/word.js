let word;

export function setupWord(element, initWord) {
  word = initWord;
  let div;
  for (let i = 0; i <= word.length - 1; i++) {
    div = document.createElement('div');
    div.classList.add('letter-box');
    element.appendChild(div);
  }
}

export function isLetterInWord(letter) {
  return word.includes(letter);
}

export function revealLetterInWord(letter) {
  // fills in a .letter-box element with the given letter
  const listOfBoxes = document.querySelectorAll('.letter-box');
  for (let i = 0; i <= word.length - 1; i++) {
    if (word[i] === letter) {
      listOfBoxes[i].innerHTML = letter;
    }
  }
}
