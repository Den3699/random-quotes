import quotes from "./qoutes.js";

const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("author");
const generateBtn = document.getElementById("generate-btn");
const toggleFavoriteBtn = document.getElementById("toggle-favorite-btn");


let currentQuoteIndex;

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const { quote, author } = randomQuote;
  // const quote = randomQuote.quote;
  // const quoteAuthor = randomQuote.author;
  //const quote = '"<em>' + randomQuote.quote + '"</em>'  + '<br>' + randomQuote.author;
  //const quote = `"<em>${randomQuote.quote}"</em><br>${randomQuote.author}`;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];                      //Поиск обьекта в массиве обьектов.
  currentQuote.isFavorite = !currentQuote.isFavorite;

  // if (toggleFavoriteBtn.textContent === "Add to favorites") {
  //   toggleFavoriteBtn.textContent = "Remove from favorites";
  // } else {
  //   toggleFavoriteBtn.textContent = "Add to favorites";
  // }

  toggleFavoriteBtn.textContent = currentQuote.isFavorite                 //Изменение названия кнопки.
    ? "Remove from favorites"
    : "Add to favorites";
}

generateBtn.addEventListener("click", generateRandomQuote);
toggleFavoriteBtn.addEventListener("click", toggleFavorite);

// Цитаты будут высвечиваться при загрузке страницы

// generateRandomQuote();
