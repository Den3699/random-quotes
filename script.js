import quotes from "./qoutes.js";

const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("author");
const generateBtn = document.getElementById("generate-btn");
const toggleFavoriteBtn = document.getElementById("toggle-favorite-btn");
const favoritesContainer = document.getElementById("favorites-container");

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
  toggleFavoriteBtn.textContent = randomQuote.isFavorite //Изменение названия кнопки.
    ? "Remove from favorites"
    : "Add to favorites";

  toggleFavoriteBtn.style.display = "inline-block"; //Кнопка появляется, когда появляются цитаты.
  quoteAuthorElement.style.display = "block";
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex]; //Поиск обьекта в массиве обьектов.
  currentQuote.isFavorite = !currentQuote.isFavorite;

  // if (toggleFavoriteBtn.textContent === "Add to favorites") {
  //   toggleFavoriteBtn.textContent = "Remove from favorites";
  // } else {
  //   toggleFavoriteBtn.textContent = "Add to favorites";
  // }

  toggleFavoriteBtn.textContent = currentQuote.isFavorite //Изменение названия кнопки.
    ? "Remove from favorites"
    : "Add to favorites";

  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement("div");
    favoriteCard.classList.add("favorite-card");
    favoriteCard.innerHTML = `<p>${currentQuote.quote}</p> <p class="author">${currentQuote.author}</p>`;
    favoritesContainer.appendChild(favoriteCard);
  } else {
    const favoriteCards = document.querySelectorAll(".favorite-card");
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove();
      }
    });
  }
}

generateBtn.addEventListener("click", generateRandomQuote);
toggleFavoriteBtn.addEventListener("click", toggleFavorite);

// Цитаты будут высвечиваться при загрузке страницы

// generateRandomQuote();
