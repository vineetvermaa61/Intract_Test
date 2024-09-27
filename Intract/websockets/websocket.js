// websockets/websocket.js
const WebSocket = require('ws');

// Store connected clients
const clients = {};

// Create WebSocket server
function setupWebSocket(server) {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws, req) => {
        console.log('New WebSocket connection established');

        ws.on('message', (message) => {
            console.log('Received:', message);
        });

        ws.on('close', () => {
            console.log('Connection closed');
        });
    });

    return wss;
}

// Function to send targeted notifications to a specific user
function sendNotificationToUser(userId, notification) {
    if (clients[userId]) {
        clients[userId].send(JSON.stringify(notification));
    }
}

// Function to broadcast notifications to all users
function broadcastNotification(notification) {
    Object.values(clients).forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(notification));
        }
    });
}

module.exports = {
    setupWebSocket,
    sendNotificationToUser,
    broadcastNotification
};
