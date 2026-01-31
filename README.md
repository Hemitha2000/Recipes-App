# Recipe Management API 🍲

A CRUD (Create, Read, Update, Delete) REST API for managing recipes, built using Node.js, Express.js, and MongoDB (Mongoose).  
The project follows the MVC architecture and includes proper validation, error handling, and API documentation.

---

## 🚀 Features

- Create a new recipe - https://recipes-app-v5fu.onrender.com/api/recipes/ (use at POST method with sample Data : { "title": "sample first fry", "description": "Spicy Indian curry", "ingredients": ["Chicken", "Onion", "Spices"], "instructions": "Cook everything well", "cookingTime": 40 } )
- Retrieve all recipes - https://recipes-app-v5fu.onrender.com/api/recipes/ 
- Retrieve a recipe by ID - https://recipes-app-v5fu.onrender.com/api/recipes/:id GET method(sample id : 697e680a75bb7930bce25e14)
- Update a recipe - https://recipes-app-v5fu.onrender.com/api/recipes/:id PUT method(sample id : 697e680a75bb7930bce25e14) - sample data : { "title": "sample first fry updated", "description": "Spicy Indian curry", "ingredients": ["tomato","Chicken", "Onion", "Spices"], "instructions": "Cook everything well", "cookingTime": 40 }
- Delete a recipe - https://recipes-app-v5fu.onrender.com/api/recipes/:id DELET method(sample id : 697e680a75bb7930bce25e14)
- Centralized error handling
- API documentation using Postman

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman
