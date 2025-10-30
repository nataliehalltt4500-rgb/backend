// server.js
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3306;

// IMPORTANT: Store these credentials securely, e.g., in environment variables!
// Do not hardcode them in your source code in a real application.
const db = mysql.createConnection({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12804696',          // Your SQL Server username
    password: 'GkvAMXQHx6',      // Your SQL Server password
     // e.g., for Azure SQL
    database: 'sql12804696',
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Successfully connected to the MySQL database.');
});
// Create an API endpoint to get data
app.get('/addStar', async (req, res) => {
    const sqlQuery = 'SELECT * FROM Star';

    // Execute the query
    db.query(sqlQuery, (err, results) => {
        if (err) {
            // If an error occurs, send a 500 server error response
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        
        // If successful, send the results as a JSON response
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});