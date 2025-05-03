# 📝 Mini Blog API with Mongoose `populate()`

A minimal blog-style REST API built with **Node.js**, **Express**, and **MongoDB (Mongoose)**, focusing on understanding **Schema Design** and using the powerful `populate()` feature in Mongoose.

---

## 📦 Features

- **User** model with basic info (`username`, `email`)
- **Post** model referencing a user (as `author`)
- **Comment** model referencing both `Post` and its `author`
- Fully working **data relations**
- Populating nested references like:
  - `Post → author`
  - `Post → comments → author`

---

## 🛠️ Technologies

- Node.js + Express
- MongoDB + Mongoose
- Postman (for testing endpoints)
- Dotenv for environment config

---

## 🚀 Installation

1. Clone the repo:

```bash
git clone https://github.com/yourusername/mini-blog-populate.git
cd mini-blog-populate
Install dependencies:
bash
npm install
Add a .env file:
env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
Run the app:
npm run dev

📌 Available Routes
Method/	Endpoint	Description
GET	/posts	Get all posts with populated author and comments
GET	/posts/:id	Get single post with full nested populate
POST	/posts	Create new post
POST	/comments	Add a comment to a post

🧪 Testing with Postman
You can test the endpoints manually using Postman. Make sure to:

Create a few users

Create posts with author referencing a user _id

Add comments with post and author fields

🧠 What You’ll Learn
How to reference documents in Mongoose schemas

How to use populate() for joining related data

How to design a scalable schema for real-world apps

💡 Tip: This project is a great starting point to build a full blog system with authentication and image upload later.
