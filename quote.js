const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs"
];

const quoteDisplay = document.getElementById("quote");
const getQuoteBtn = document.getElementById("getQuoteBtn");

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
}

getQuoteBtn.addEventListener("click", getRandomQuote);
