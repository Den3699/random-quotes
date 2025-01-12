import quotes from "./qoutes.js";  

const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("author");
const generateBtn = document.getElementById("generate-btn");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, author } = randomQuote;
  // const quote = randomQuote.quote;
  // const quoteAuthor = randomQuote.author;
  //const quote = '"<em>' + randomQuote.quote + '"</em>'  + '<br>' + randomQuote.author;
  //const quote = `"<em>${randomQuote.quote}"</em><br>${randomQuote.author}`;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
}

generateBtn.addEventListener("click", generateRandomQuote);

// Цитаты будут высвечиваться при загрузке страницы

// generateRandomQuote();
