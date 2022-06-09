const btnSetting = document.querySelector('.setting-btn');
const listItem = document.querySelector('.setting-items');

function showSetting() {
  listItem.classList.toggle('hidden');
}

btnSetting.addEventListener('click', showSetting);

const weather = document.querySelector('.weather');
const player = document.querySelector('.player');
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting-container');
const quotes = document.querySelector('.footer');

const btnWeather = document.querySelector('.whetherHid');
const btnPlayer = document.querySelector('.audioHid');
const btnTime = document.querySelector('.timeHid');
const btnDate = document.querySelector('.dateHid');
const btnGreeting = document.querySelector('.greetingHid');
const btnQuotes = document.querySelector('.quotesHid');




btnPlayer.addEventListener('click', () => {
  player.classList.toggle('hidden');
});

btnDate.addEventListener('click', () => {
  date.classList.toggle('hidden');
});
btnGreeting.addEventListener('click', () => {
  greeting.classList.toggle('hidden');
});
btnQuotes.addEventListener('click', () => {
  quotes.classList.toggle('hidden');
});
btnWeather.addEventListener('click', () => {
  weather.classList.toggle('hidden');
});
btnTime.addEventListener('click', () => {
  time.classList.toggle('hidden');
});