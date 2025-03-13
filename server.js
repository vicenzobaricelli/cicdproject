const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start the server only if this file is run directly
let server;
if (require.main === module) {
    server = app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

// Export both app and a function to start the server for testing
const startServer = () => app.listen(PORT);

module.exports = { app, startServer };

