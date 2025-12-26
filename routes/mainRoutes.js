// routes/mainRoutes.js
const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

// GET routes
router.get("/", mainController.home);
router.get("/about", mainController.about);
router.get("/contact", mainController.contact);
router.get("/time", mainController.time);

// POST route
router.post("/echo", mainController.echo);

module.exports = router;
