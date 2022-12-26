var typingArea = document.querySelector('.typing');

var text = 'grumpy elves deliver coal';

var characters = text.split('').map(char => {
  var span = document.createElement('span');
  span.innerText = char;
  typingArea.appendChild(span);
  return span;
});

var cursorIndex = 0;
var typingChar = characters[cursorIndex];
typingChar.classList.add('cursor');

document.addEventListener('keydown', ({ key }) => {
  if (key === typingChar.innerText) {
    typingChar.classList.remove('cursor');
    typingChar.classList.add('done');
    typingChar = characters[++cursorIndex];
    typingChar.classList.add('cursor');
  } else if (key !== typingChar.innerText) {
    typingChar.classList.add('error');
  }
});
