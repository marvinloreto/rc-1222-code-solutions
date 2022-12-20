var switcher = document.querySelector('.lightswitch');
var background = document.querySelector('.container');

switcher.addEventListener('click', function () {
  if (switcher.className === 'lightswitch on') {
    switcher.className = 'lightswitch off';
    background.className = 'container off';
  } else if (switcher.className === 'lightswitch off') {
    switcher.className = 'lightswitch on';
    background.className = 'container on';
  }
});
