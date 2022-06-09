const greeting = document.querySelector('.greeting');
const userName = document.querySelector('.name');

function setLocalStorage() {
  localStorage.setItem('name', userName.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    userName.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage);

function getHours() {
  const date = new Date();
  const hours = date.getHours();
  return hours;
}

const timeNow = getHours();

function getTimeOfDay(timeNow) {
  if(timeNow >= 6 && timeNow < 12) {
    return `morning`;
  } else if (timeNow >= 12 && timeNow < 17) {
    return `afternoon`;
  } else if (timeNow >= 17 && timeNow < 24) {
    return `evening`;
  } else if (timeNow >= 0 && timeNow < 6) {
    return `night`;
  }
}

export const getDay = getTimeOfDay(timeNow);

function showGreeting() {
  greeting.textContent = 'Good ' + getDay;
  setTimeout(showGreeting, 1000);
}

showGreeting();