// controllers/mainController.js

// Home route
exports.home = (req, res) => {
    res.json({ message: "Welcome to the Express MVC server!" });
};

// About route
exports.about = (req, res) => {
    res.json({ message: "This is a simple Express.js backend using MVC pattern." });
};

// Contact route
exports.contact = (req, res) => {
    res.json({ email: "laviee1434@gnmail.com", phone: "+251978642454" });
};

// Dynamic data route
exports.time = (req, res) => {
    const currentTime = new Date().toLocaleString();
    res.json({ message: `Current server time is ${currentTime}` });
};

// JSON input route
exports.echo = (req, res) => {
    const data = req.body; // JSON data from POST request
    if (!data.name) {
        return res.status(400).json({ error: "Please provide a 'name' field in JSON." });
    }
    res.json({ received: data });
};
