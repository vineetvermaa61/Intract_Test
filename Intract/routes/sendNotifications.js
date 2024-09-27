// routes/sendNotifications.js
const express = require('express');
const router = express.Router();
const { send, read } = require("../controllers/Notify");

// Send Notification
router.post("/send", send);

// Fetch Notifications (targeted to specific user)
router.get("/read/:userId", read);

module.exports = router;
