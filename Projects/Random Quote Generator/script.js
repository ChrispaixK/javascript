// Variables and datatypes


// Create an object datatype -> an array 
const quotes = [
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It always seems impossible until it’s done. - Nelson Mandela",
];

function generateQuote() {
    // Declare constants variables within the block scope using const
    // Get a random index from the array
    const randomIndex = Math.floor(Math.random() * quotes.length);

    // Display the random quote
    const quoteContainer = document.getElementById("quote");
    quoteContainer.textContent = quotes[randomIndex];
}
