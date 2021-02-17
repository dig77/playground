// variables
const searchButton = document.querySelector('#search-btn');
const modal = document.querySelector('.modal')
const inputBox = document.querySelector('#input-box');
const closeModalButton = document.querySelector('.close-modal');
const formArea = document.querySelector('form');
const showQuery = document.querySelector('#myQuery');
const imagesItem = document.querySelectorAll('.slider-item');
const slider = document.querySelector('.is-slider');
const nextButton = document.querySelector('#next-button');
const prevButton = document.querySelector('#previous-button');
let currentImgIndex = 0;
const totalSlides = imagesItem.length;
let query;
const indicators = document.querySelectorAll('.ball');


// event listeners
searchButton.addEventListener('click',openModal);
closeModalButton.addEventListener('click', closeModal);
formArea.addEventListener('submit', getQuery);
nextButton.addEventListener('click', moveNextImg);
prevButton.addEventListener('click', movePrevImg);

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
    checkImg();
    slider.classList.add('visible');
    getImage();
    modal.classList.remove('is-visible');
    inputBox.value = '';
}

function hideAllImg() {
   for (const image of imagesItem) {
       image.classList.remove('visible');
       image.classList.add('hidden');
   }
}

function hideIndicators() {
    for( const ball of indicators) {
        ball.classList.remove('is-current');
    }
}

function moveNextImg() {
    hideAllImg();
    hideIndicators();
    if(currentImgIndex === totalSlides -1) {
        currentImgIndex = 0
    } else {
        currentImgIndex ++;   
    }
    imagesItem[currentImgIndex].classList.add('visible');
    indicators[currentImgIndex].classList.add('is-current');
}

function movePrevImg() {
    hideAllImg();
    hideIndicators();
    if(currentImgIndex === 0) {
        currentImgIndex = totalSlides - 1;
    }
    else {
        currentImgIndex--;
    }
    imagesItem[currentImgIndex].classList.add('visible');
    indicators[currentImgIndex].classList.add('is-current');
}

function checkImg() {
    const images = document.querySelectorAll('img');
    images.forEach(el => {
        el.remove();
    })
}

