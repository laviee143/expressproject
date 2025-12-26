// app.js
const express = require("express");
const app = express();
const mainRoutes = require("./routes/mainRoutes");

// Middleware to parse JSON
app.use(express.json());

// Use main routes
app.use("/", mainRoutes);

// Handle unknown routes (bonus)
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
