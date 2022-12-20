var numClicks = 0;

var hotButton = document.querySelector('.hot-button');
var clickCounter = document.querySelector('.click-count');

hotButton.addEventListener('click', function () {
  numClicks++;
  clickCounter.textContent = 'Clicks: ' + numClicks;
  if (numClicks < 4) {
    hotButton.className = 'hot-button cold';
  } else if (numClicks < 7) {
    hotButton.className = 'hot-button cool';
  } else if (numClicks < 10) {
    hotButton.className = 'hot-button tepid';
  } else if (numClicks < 13) {
    hotButton.className = 'hot-button warm';
  } else if (numClicks < 16) {
    hotButton.className = 'hot-button hot';
  } else if (numClicks >= 16) {
    hotButton.className = 'hot-button nuclear';
  }
});
