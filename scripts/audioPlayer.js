import {playList} from './playList.js';
const play_prev = document.querySelector('.play-prev');
const play_next = document.querySelector('.play-next');
const play = document.querySelector('.play');
const playListContainer = document.querySelector('.play-list');
let isPlay = false;
let playNum = 0;
const audio = new Audio();

function playAudio() {
  audio.src = `momentum/${playList[playNum].src}`;
  audio.currentTime = 0;
  if(audio.src) {
    playListContainer.childNodes.forEach(el => el.classList.remove('item-active'));
    playListContainer.childNodes[playNum].classList.add('item-active');
  } 
  
  audio.onended = () => {
    playNext();
  }

  isPlay ? audio.play() : audio.pause();  
}

function toggleBtn() {

  if(play.classList.contains('play')) {
    play.classList.remove('play');
    play.classList.add('pause');
    isPlay = true;
  } else {
    play.classList.remove('pause');
    play.classList.add('play');
    isPlay = false;
  }
}

play.addEventListener('click', toggleBtn);
play.addEventListener('click', playAudio);

function playNext() {
  if(play.classList.contains('play')) {
    play.classList.remove('play');
    play.classList.add('pause');
    isPlay = true;
  }

  if (playNum === playList.length) {
    playNum = 0;
  }

  playNum++;
  playAudio();
}
function playPrev() {
  if(play.classList.contains('play')) {
    play.classList.remove('play');
    play.classList.add('pause');
    isPlay = true;
  }

  if (playNum === 0 || playNum > playList.length) {
    playNum = playList.length;
  }
  playNum--;
  playAudio();
}

play_next.addEventListener('click', playNext);
play_prev.addEventListener('click', playPrev);

playList.forEach(el => {
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = el.title;
  playListContainer.append(li);
})



