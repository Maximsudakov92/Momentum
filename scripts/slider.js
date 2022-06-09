import { getDay } from "./greeting.js";

const body = document.querySelector('body');
const prevSlide = document.querySelector('.slide-prev');
const nextSlide = document.querySelector('.slide-next');
const gitHub = document.querySelector('.gitHub');
const unsplash = document.querySelector('.unsplash');
const flickr = document.querySelector('.flickr');


function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min + '';
};

let randomNum = getRandomNum(1, 20);

function setBg() {
  const timeOfDay = getDay;
  const slideNum = randomNum.padStart(2, '0');
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${slideNum}.jpg`;
  img.onload = () => {
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${slideNum}.jpg')`;
  }
  
  flickr.classList.remove('active');
  unsplash.classList.remove('active');
  gitHub.classList.add('active');
};

setBg();

async function setBgUnsplash() {
  const timeOfDay = getDay;
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&client_id=q21WefqY5XyIoHDUJaZhWj_yHQza7-vTXZd1a5LCzoU`;
  const res = await fetch(url);
  const data = await res.json();
  const img = new Image();
  img.src = data.urls.regular;
  img.onload = () => {
    body.style.backgroundImage = `url(${data.urls.regular})`;
  }
  gitHub.classList.remove('active');
  flickr.classList.remove('active');
  unsplash.classList.add('active');
}

async function setBgFlickr() {
  const timeOfDay = getDay;
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&page=${randomNum}&per_page=1&api_key=1161e03eb5edc8c1fdc0b503c89f64d1&tags=${timeOfDay}&extras=url_l&format=json&nojsoncallback=1`;
  const res = await fetch(url);
  const data = await res.json();
  
  const img = new Image();
  img.src = data.photos.photo[0].url_l;
  img.onload = () => {
    body.style.backgroundImage = `url(${data.photos.photo[0].url_l})`;
    console.log(data)
  }

  gitHub.classList.remove('active');
  unsplash.classList.remove('active');
  flickr.classList.add('active');
}

function getSlideNext() {
  let num = +randomNum;
  
  if(+num < 20) {
    num += 1;
    randomNum = num + '';
  } else {
    randomNum = '1';
  }

  if(gitHub.classList.contains('active')) {
    setBg()
  } else if (unsplash.classList.contains('active')) {
    setBgUnsplash()
  } else if (flickr.classList.contains('active')) {
    setBgFlickr();
  }
};

function getSlidePrev() {
  let num = +randomNum;

  if(+num > 1) {
    num -= 1;
    randomNum = num + '';
  } else {
    randomNum = '20';
  }
  
  if(gitHub.classList.contains('active')) {
    setBg()
  } else if (unsplash.classList.contains('active')) {
    setBgUnsplash()
  } else if (flickr.classList.contains('active')) {
    setBgFlickr();
  }
};

nextSlide.addEventListener('click', getSlideNext);
prevSlide.addEventListener('click', getSlidePrev);

gitHub.addEventListener('click', setBg);
unsplash.addEventListener('click', setBgUnsplash);
flickr.addEventListener('click', setBgFlickr);