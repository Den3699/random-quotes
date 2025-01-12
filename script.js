const quotes = [
  {
    quote: "The only way to do great work is to love what you do",
    author: "Steve Jobs",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower",
    author: "Steve Jobs",
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life",
    author: "Steve Jobs",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts",
    author: "Winston Churchill",
  },
  {
    quote: "Life is what happens when you're busy making other plans",
    author: "John Lennon",
  },
  {
    quote:
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment",
    author: "Buddha",
  },
  {
    quote: "It always seems impossible until it’s done",
    author: "Nelson Mandela",
  },
  {
    quote:
      "Happiness is not something ready-made. It comes from your own actions",
    author: "Dalai Lama",
  },
  {
    quote: "In the middle of every difficulty lies opportunity",
    author: "Albert Einstein",
  },
  {
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Believe you can and you're halfway there",
    author: "Theodore Roosevelt",
  },
  {
    quote: "Don’t watch the clock; do what it does. Keep going",
    author: "Sam Levenson",
  },
];

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
