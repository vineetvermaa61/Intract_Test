Real-Time Notification System
Assignment Summary
This project implements a real-time web-based notification system using Node.js, Express, MongoDB, and WebSockets. The main tasks performed during the assignment are as follows:

Project Structure
Backend:

Database Connection: Configured MongoDB connection in config/database.js using Mongoose.
Data Model: Created a notification schema in models/schema.js to store notification details.
API Endpoints:
Implemented POST /api/v1/notifications/send for sending notifications to specific users or broadcasting to all users.
Implemented POST /api/v1/notifications/read for marking notifications as read.
Implemented GET /api/v1/notifications/{userId} for fetching notifications for a specific user.
WebSocket Implementation: Set up WebSocket in index.js for real-time communication, enabling instant delivery of notifications to connected clients.
Frontend:

Developed a simple HTML interface with a dedicated section to display notifications.
Established a WebSocket connection to the backend to receive real-time notifications.
Implemented logic to parse and display notifications as they are received.
Key Features
Real-Time Notifications: Users receive notifications instantly through WebSocket connections.
Targeted and Broadcast Notifications: Support for both specific user notifications (e.g., order updates) and broadcast notifications (e.g., promotional offers).
Database Storage: Notifications are stored in MongoDB for persistent storage and retrieval.
Implementation Steps
Database Setup:

Configured MongoDB connection.
Created a schema for notifications.
API Development:

Created necessary API endpoints for sending and fetching notifications.
WebSocket Integration:

Established WebSocket connections for real-time communication between the server and client.
Frontend Development:

Built an HTML page to display notifications and handle incoming WebSocket messages.
Styled notification messages for better visibility.
Testing:

Verified that notifications are sent and received correctly.
Ensured that notifications are stored in the database and can be fetched as needed.
Conclusion
The assignment successfully demonstrates the ability to create a real-time notification system using modern web technologies. The project provides a foundational understanding of backend development with Node.js and database interaction with MongoDB, along with real-time data handling using WebSockets.
