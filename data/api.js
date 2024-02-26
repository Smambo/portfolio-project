// Function to fetch stock prices from Alpha Vantage API for multiple symbols
/*function fetchStockPrices(symbols) {
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
fetchStockPrices(['AAPL', 'GOOGL', 'MSFT']); */

'use strict';
const express = require('express');
const axios = require('axios');

const app = express();

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=DI7EUUTTCC5JGMGI';

app.get('/stockData', async (req, res) => {
    try {
      const response = await axios.get(url);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch stock data' });
    }
});
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});