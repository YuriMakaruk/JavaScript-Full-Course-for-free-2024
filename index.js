const quote = document.getElementById("quote");
const motivational = document.getElementById("motivationalQuotes");
const funny = document.getElementById("funnyQuotes");
const philosophical = document.getElementById("philosophicalQuotes");
let randomQuote;

const motivationalQuotes = [
  "Believe you can and you're halfway there.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
];

const funnyQuotes = [
  "I'm on a whiskey diet. I've lost three days already.",
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
];

const philosophicalQuotes = [
  "The unexamined life is not worth living.",
  "To be is to be perceived.",
  "The only thing I know is that I know nothing.",
];

function generator() {
  if (motivational.checked) {
    randomQuote = Math.floor(Math.random() * motivationalQuotes.length);
    quote.textContent = motivationalQuotes[randomQuote];
  } else if (funny.checked) {
    randomQuote = Math.floor(Math.random() * funnyQuotes.length);

    quote.textContent = funnyQuotes[randomQuote];
  } else if (philosophical.checked) {
    randomQuote = Math.floor(Math.random() * philosophicalQuotes.length);

    quote.textContent = philosophicalQuotes[randomQuote];
  } else {
    quote.textContent = "Please select a category.";
  }
}
