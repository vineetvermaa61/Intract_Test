// controllers/Notify.js
const File = require("../models/schema");
const { sendNotificationToUser, broadcastNotification } = require('../websockets/websocket');  // Import WebSocket functions

// Send notification (targeted or broadcast)
exports.send = async (req, res) => {
    const { target, userId, message, source, timestamp } = req.body;

    try {
        // Save notification in the database
        const notification = await File.create({
            target,
            userId,
            message,
            source,
            timestamp: new Date(timestamp)
        });

        // Check if it's targeted or broadcast
        if (target === 'specific') {
            sendNotificationToUser(userId, notification);  // Send to specific user
        } else if (target === 'all_users') {
            broadcastNotification(notification);  // Broadcast to all users
        }

        return res.status(200).json({ success: true, notification });
    } catch (error) {
        console.log("Error in sending notification", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

// Fetch notifications for a specific user
exports.read = async (req, res) => {
    const { userId } = req.params;
    try {
        const notifications = await File.find({ userId });
        res.status(200).json(notifications);
    } catch (error) {
        console.log("Error fetching notifications", error);
        res.status(500).json({ success: false });
    }
};
