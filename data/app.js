/*const express = require('express');
const mysql = require('mysql');

const app = express();

// Database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'stock_tracker'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Authenticate user against database
function authenticateUser(username, password, callback) {
    const query = 'SELECT * FROM user WHERE username = ? AND password = ?';
    connection.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            callback(err, null);
            return;
        }
        callback(null, results.length > 0);
    });
}

// Handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    authenticateUser(username, password, (err, authenticated) => {
        if (err) {
            res.status(500).send('Internal Server Error');
            return;
        }
        if (authenticated) {
            res.redirect('/dashboard'); // Redirect to dashboard upon successful login
        } else {
            res.redirect('/login'); // Redirect back to login page if authentication fails
        }
    });
});

// Route for the main dashboard page
app.get('/dashboard', (req, res) => {
    res.send('Welcome to the dashboard!');
});

// Route for the login page
app.get('/login', (req, res) => {
    res.send('Please login');
});

const PORT = process.env.PORT || 3307;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
*/