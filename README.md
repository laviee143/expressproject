# Express MVC Backend

A simple **Express.js** backend project structured with the **MVC (Model-View-Controller)** architecture. This project demonstrates how to build RESTful APIs using Node.js and Express with clean code organization.

---

## Features

- MVC architecture: Separation of concerns with Models, Views, and Controllers.
- JSON-based API endpoints.
- Example `/echo` POST endpoint to test request handling.
- Easy to extend with new routes, controllers, and models.

---

## Installation

1. Clone the repository:

git clone https://github.com/laviee143/expressproject.git
cd expressproject

2. Install dependencies:
   npm install
3.Run the server:
   npm start
   The server will start on http://localhost:3000.

Example API Request

POST /echo
curl -X POST http://localhost:3000/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Jerusalem","role":"Student"}'
Response:
{
  "received": {
    "name": "Jerusalem",
    "role": "Student"
  }
}

Project Structure
express-mvc-backend/
│
├── controllers/     # Controller files
├── models/          # Data models
├── routes/          # Express routes
├── app.js           # Main Express app
└── package.json     # Node.js dependencies
Contributing

Fork the repository.

Create a new branch: git checkout -b feature-name

Make your changes and commit: git commit -m "Add feature"

Push to your branch: git push origin feature-name

Open a pull request.
