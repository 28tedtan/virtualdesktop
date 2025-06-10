const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 34043;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve the main HTML file for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Open http://localhost:${port} in your browser`);
}); 