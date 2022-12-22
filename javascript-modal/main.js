var modal = document.querySelector('.with-modal');
var open = document.querySelector('.open-modal');
var close = document.querySelector('.close-modal');

function openModal(event) {
  modal.style.display = 'block';
}

function closeModal(event) {
  modal.style.display = 'none';
}

open.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
