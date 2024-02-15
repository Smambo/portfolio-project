// Wait for the DOM content to be fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.querySelector(".search-button");
    searchButton.addEventListener("click", searchStock);
});

function searchStock() {
    const searchInput = document.getElementById("searchInput").value;
    if (searchInput) {
        fetchStockInfo(searchInput);
    } else {
        alert("Please enter a stock symbol");
    }
}

function fetchStockInfo(symbol) {
    const apiKey = 'DI7EUUTTCC5JGMGI';
    const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Process and display stock information
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching stock information:', error);
        });
}