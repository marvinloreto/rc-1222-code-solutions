var text = document.querySelector('h1');

function greeting() {
  text.textContent = 'Hello There';
  return text;
}

setTimeout(greeting, 2000);
