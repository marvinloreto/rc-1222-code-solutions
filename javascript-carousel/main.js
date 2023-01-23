var rightChev = document.querySelector('.fa-chevron-right');
var leftChev = document.querySelector('.fa-chevron-left');
var selectedImage = document.querySelector('img');
var selectedButton = document.querySelector('.button');
var buttons = document.querySelectorAll('.fa-circle');
var imageUrls = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var imageIndex = 0;

rightChev.addEventListener('click', handleRightChev);
function handleRightChev(event) {
  imageIndex++;
  if (imageIndex === imageUrls.length) {
    imageIndex = 0;
  }
  selectedImage.setAttribute('src', imageUrls[imageIndex]);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('chosen');
  }
  buttons[imageIndex].classList.add('chosen');
}

leftChev.addEventListener('click', handleLeftChev);
function handleLeftChev(event) {
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = 4;
  }
  selectedImage.setAttribute('src', imageUrls[imageIndex]);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('chosen');
  }
  buttons[imageIndex].classList.add('chosen');
}

selectedButton.addEventListener('click', handleButton);
function handleButton(event) {
  if (event.target.matches('i')) {
    imageIndex = Number(event.target.getAttribute('data-index'));
    selectedImage.setAttribute('src', imageUrls[imageIndex]);
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('chosen');
    }
    buttons[imageIndex].classList.add('chosen');
  }
}

setInterval(changeImage, 3000);
function changeImage() {
  imageIndex++;
  if (imageIndex === imageUrls.length) {
    imageIndex = 0;
  }
  selectedImage.setAttribute('src', imageUrls[imageIndex]);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('chosen');
  }
  buttons[imageIndex].classList.add('chosen');
}
