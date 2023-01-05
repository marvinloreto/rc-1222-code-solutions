
var text = document.querySelector('h1');
var starter = 4;

function countdown() {
  text.textContent = starter--;
  if (text.textContent === '0') {
    text.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timer);
  }
  return text;
}

var timer = setInterval(countdown, 1000);
