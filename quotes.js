async function loadQuotes() {
  try {
    const response = await fetch("quotes.json");
    const quotes = await response.json();
    return quotes;
  } catch (error) {
    console.error("Error loading quotes:", error);
    return [];
  }
}

function displayRandomQuote(quotes) {
  if (quotes.length === 0) {
    console.error("No quotes available");
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const { quote, author } = quotes[randomIndex];

  document.getElementById("quote").textContent = quote;
  document.getElementById("author").textContent = `- ${author}`;
}

async function init() {
  const quotes = await loadQuotes();
  displayRandomQuote(quotes);
}

init();
