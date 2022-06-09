const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let i = getRandom(0, 3)

async function getQuotes() {  
  const quotes = 'data/data.json';
  const res = await fetch(quotes);
  const data = await res.json(); 

  if (i === data.length) {
    i = 0;
  }

  quote.textContent = data[i].text;
  author.textContent = data[i].author;
  i++;

}

getQuotes();

changeQuote.addEventListener('click', getQuotes);
changeQuote.addEventListener('click', getRandom);



