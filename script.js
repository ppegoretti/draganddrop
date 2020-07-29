function log(message) {
  console.log(`> ${message}`);
}

const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');
const selectCards = document.querySelector('.status');

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart);
  card.addEventListener('drag', drag);
  card.addEventListener('dragend', dragend);
});

function dragstart() {
  dropzones.forEach(dropzone => {
    dropzone.classList.add('highlight');
  });
  this.classList.add('is-dragging');
}

function drag() {}

function dragend() {
  dropzones.forEach(dropzone => {
    dropzone.classList.remove('highlight');
  });
  this.classList.remove('is-dragging');
}

function changecolor() {}

dropzones.forEach(drop => {
  drop.addEventListener('dragenter', dragenter);
  drop.addEventListener('dragover', dragover);
  drop.addEventListener('dragleave', dragleave);
  drop.addEventListener('drop', drop);
});

function dragenter() {}

function dragover() {
  this.classList.add('over');

  const cardBeingDragged = document.querySelector('.is-dragging');

  this.appendChild(cardBeingDragged);
}

function dragleave() {
  this.classList.remove('over');
}

function drop() {
  this.classList.remove('over');
}
