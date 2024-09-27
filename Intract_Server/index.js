const express = require('express');
const http = require('http');  // Create HTTP server for WebSocket to use
const WebSocket = require('ws');
require("dotenv").config();

const app = express();
app.use(express.json());

// MongoDB setup
const db = require("./config/database");
db.connect();

// API routes
const sendNotifications = require("./routes/sendNotifications");
app.use("/api/notifications", sendNotifications);

// Create HTTP server
const server = http.createServer(app);

// Create WebSocket server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('New WebSocket connection established');

    // Keep WebSocket alive by responding to pings
    ws.on('pong', () => console.log('Received pong from client'));

    ws.on('message', (message) => {
        console.log('Received message from client:', message);
    });

    // Close WebSocket connection handling
    ws.on('close', () => {
        console.log('Connection closed');
    });

    // Send a test notification to the client
    ws.send(JSON.stringify({
        message: "This is a test notification",
        timestamp: new Date().toISOString(),
    }));
});

// Start the server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
