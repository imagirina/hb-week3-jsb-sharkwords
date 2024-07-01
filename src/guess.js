const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function setupGuesses(element, handleGuess) {
  // create a button for every letter in the alphabet
  alphabet.split('').forEach((letter) => {
    const btn = document.createElement('button');
    btn.innerText = letter;
    // Attach an event handler to the 'click' event
    btn.addEventListener('click', (e) => handleGuess(e, letter));
    // Append the button to the given element
    element.append(btn);
  });
}

export default setupGuesses;
