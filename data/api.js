// Function to fetch stock prices from Alpha Vantage API for multiple symbols
function fetchStockPrices(symbols) {
    const apiKey = 'DI7EUUTTCC5JGMGI';
    const apiUrl = `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=${symbols.join(',')}&apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Parse the response and extract the relevant data for each symbol
            symbols.forEach(symbol => {
                const price = data['Stock Quotes'].find(quote => quote['1. symbol'] === symbol)['2. price'];
                // Display the price on the page
                document.getElementById(`${symbol}_price`).innerText = `${symbol}: $${price}`;
            });
        })
        .catch(error => {
            console.error('Error fetching stock prices:', error);
        });
}

// Call the function with an array of sample stock symbols
fetchStockPrices(['AAPL', 'GOOGL', 'MSFT']);



