function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('target:', event.target);
}

var buttonClick = document.querySelector('.click-button');

buttonClick.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('target:', event.target);
}

var buttonHover = document.querySelector('.hover-button');

buttonHover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event', event);
  console.log('target:', event.target);
}

var doubleClick = document.querySelector('.double-click-button');

doubleClick.addEventListener('dblclick', handleDoubleClick);
