// variables
const searchButton = document.querySelector('#search-btn');
const modal = document.querySelector('.modal')
const inputBox = document.querySelector('#input-box');
const closeModalButton = document.querySelector('.close-modal');
const formArea = document.querySelector('form');
const showQuery = document.querySelector('#myQuery');
const imagesItem = document.querySelectorAll('.slider-item');
const slider = document.querySelector('.is-slider');
let query;


// event listeners
searchButton.addEventListener('click',openModal);
closeModalButton.addEventListener('click', closeModal);
formArea.addEventListener('submit', getQuery);

// functions
function openModal() {
    modal.classList.add('is-visible');
}

function closeModal() {
    modal.classList.remove('is-visible');
}

function getImage() {
    let image;
    for(let i = 0 ; i < 3; i++) {
        image = `
        <img src="https://source.unsplash.com/1600x900/?${query}=${i + 1}">
        `
        imagesItem[i].insertAdjacentHTML('afterbegin', image)
    }

    
}

function getQuery(e) {
    e.preventDefault();
    query = inputBox.value;
    slider.classList.add('visible');
    getImage();
    console.log(query);
    modal.classList.remove('is-visible');
    inputBox.value = '';
}

