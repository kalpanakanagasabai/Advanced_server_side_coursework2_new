# 🌍 Travel Blog Website

## 📖 Overview

The Travel Blog Website is a full-stack web application that allows users to document and share their travel experiences by creating blog posts associated with countries they’ve visited. The platform supports user registration, secure authentication, interactive features like comments and likes, and includes a global country information system with real-time data display for currency, flag, and capital.

---

## 🚀 Features

### 1. 👤 User Management
- Register with a username and secure password
- Secure login/logout with password hashing
- Access control: Only authors can edit/delete their own posts
- Privacy and protection of user data

### 2. ✍️ Blog Post Management
- Create blog posts with:
  - Title
  - Content
  - Country name
  - Date of visit
- Edit and delete own posts
- Posts stored in **SQLite** database
- Public visibility of all posts (even to unregistered visitors)

### 3. 🔍 Blog Search and Filtering
- Search by **country name**
- Search by **username**
- Paginated results with:
  - Title
  - Author
  - Country
  - Date

### 4. 🔁 User Following System
- Follow/unfollow other users
- View list of followers and followings on profile pages
- Feed of posts from followed users

### 5. 💬 Comment & Interaction System
- Like and dislike blog posts
- Display total likes and dislikes on each post

### 6. 🏠 Homepage & Navigation
- Homepage shows recent and popular posts
- Navigation includes:
  - Home
  - Search
  - Login/Register
  - User Profile
- Sorting options:
  - Newest
  - Most Liked
  - Most Commented

### 7. 🧰 Backend & Database
- Backend powered by **Node.js** and **Express**
- Database: **SQLite**
- Tables:
  - Users
  - Blog Posts
  - Likes
  - Followers
  - Comments
- Scalable and secure architecture

### 8. 🌐 Country Info Dropdown
- Dropdown list of **all countries in the world**
- On selection, display:
  - Flag
  - Currency
  - Capital city

---

## 🧪 Tech Stack

Frontend: React.js

Backend: Node.js, Express

Database: Mysql

Authentication: JWT

Styling: Tailwind / Bootstrap

Others: Axios, bcryptjs, dotenv, cors

---

## 🐳 Docker Support

The app is fully dockerized for simple and consistent deployment.

### ⚙️ Run with Docker

```bash
docker-compose up --build
