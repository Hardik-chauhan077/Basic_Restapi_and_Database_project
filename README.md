# Basic_Restapi_and_Database_project

This repository contains two basic Node.js + Express.js projects:

1. **Messenger Prototype** – A mini chat messaging web app using MongoDB and Mongoose.
2. **Quera-Based Post App** – A simple post creation and management app using UUID and in-memory storage.

---

## 🔧 Technologies Used

- Node.js
- Express.js
- EJS Templating
- MongoDB + Mongoose (Messenger App)
- UUID (Quera App)
- HTML/CSS
- Method-Override
- Static Assets via `public` folder

---

## 📁 Folder Structure
├── models/
│ └── chat.js # Chat schema for Messenger App
├── public/
│ └── style.css # Shared/static styles (optional)
├── views/
│ ├── index.ejs # Listing page
│ ├── new.ejs # Form to create a new item
│ ├── edit.ejs # Form to edit an existing item
│ └── show.ejs # (Quera project only)
├── messenger.js # Messenger Prototype project
├── quera_app.js # Quera-based post app
└── README.md # Project documentation

---

## 1️⃣ Messenger Prototype

A basic messaging app where users can:
- View all chats
- Create new chat messages
- Edit message content
- Delete chats

### 🛠️ Setup Instructions

1. Make sure MongoDB is installed and running locally.
2. Install dependencies:
   ```bash
   npm install express mongoose ejs method-override

3. Run the server:
   ```bash
   node messenger.js

4. Open in browser:
    ```bash
   http://localhost:8080/chats

 ---   
📌 Features

.Uses MongoDB (via Mongoose) to store messages

.CRUD operations on chats

.Time-stamped messages with created_at

.Clean EJS views
---

2️⃣ Quera-Based Post App

.This is a simple post sharing application (no database):

.Create posts

.View individual post

.Edit and update content

.Delete posts

----

🛠️ Setup Instructions

1. Install dependencies:
    ```bash
    npm install express ejs method-override uuid
2. Run the server:
   ```bash
   node quera_app.js

3. Open in browser:
   ```bash
   http://localhost:8080/posts

   ---
📌 Features

.Uses in-memory array to manage posts

.UUID for unique post identifiers

.Minimalist post viewer

.Full CRUD with clean routing
