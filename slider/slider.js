const searchButton = document.querySelector('#search-btn');
const modal = document.querySelector('.modal')
const inputBox = document.querySelector('#input-box');
const closeModalButton = document.querySelector('.close-modal');

searchButton.addEventListener('click',openModal);
closeModalButton.addEventListener('click', closeModal);

function openModal() {
    modal.classList.add('is-visible');
}

function closeModal() {
    modal.classList.remove('is-visible');
}