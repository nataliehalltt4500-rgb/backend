// server.js
const express = require('express');
const sql = require('mssql');
const app = express();
const port = 3306;

// IMPORTANT: Store these credentials securely, e.g., in environment variables!
// Do not hardcode them in your source code in a real application.
const dbConfig = {
    user: 'sql12804696',          // Your SQL Server username
    password: 'GkvAMXQHx6',      // Your SQL Server password
    server: 'sql12.freesqldatabase.com', // e.g., for Azure SQL
    database: 'sql12804696'
};

// Create an API endpoint to get data
app.get('/addStar', async (req, res) => {
    try {
        // Connect to the database
        await sql.connect(dbConfig);

        // Execute a query
        const result = await sql.query`SELECT * FROM Star`;

        // Send the result as JSON
        res.json(result.);
    } catch (err) {
        console.error('SQL error', err);
        res.json(err,"Fuck")
        res.status(500).send('Database connection failed');
    }
});

app.listen(port, () => {
    console.log(`Server running at`);
});