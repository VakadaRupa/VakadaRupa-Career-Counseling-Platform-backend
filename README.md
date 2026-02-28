# VakadaRupa-Career-Counseling-Platform-backend



---

## ✅ Backend Repository → `README.md`

```markdown
# CareerCounselingPlatform_Career (Backend)

## 📌 Project Overview
The backend of CareerCounselingPlatform_Career provides RESTful APIs for authentication, profile management, counseling session booking, resource management, job board integration, and community forum services.

The backend follows MVC architecture and is built using Node.js, Express.js, and Supabase database integration.

---

## 🛠 Tech Stack
- Node.js
- Express.js
- Supabase Database
- JWT Authentication
- bcrypt.js (if password encryption is used)
- dotenv

---

## 📦 Project Structure

backend/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── utils/
└── server.js / app.js

---

## 🗄 Database Schema Explanation

### Users Table
- id (Primary Key)
- name
- email (Unique)
- password
- role (user / counselor)

### Counselor Profiles Table
- id
- user_id (Foreign Key → Users)
- qualification
- expertise_area
- experience_years
- bio

### Sessions Table
- id
- user_id (Foreign Key → Users)
- counselor_id (Foreign Key → Users)
- session_date
- session_time
- status
- feedback

### Resources Table
- id
- title
- description
- resource_type (article/video/template)
- url

### Jobs Table
- id
- title
- company
- location
- apply_link

---

## 🔗 API Documentation (Sample Endpoints)

### Authentication
- POST /api/auth/register
- POST /api/auth/login

### Profile Management
- GET /api/profile
- PUT /api/profile

### Counseling Sessions
- POST /api/sessions/book
- GET /api/sessions/user
- GET /api/sessions/counselor

### Resources
- GET /api/resources
- POST /api/resources (Admin/Counselor only)

### Community Forum
- GET /api/forum
- POST /api/forum/post

---

## ⚙️ Installation Steps

1. Clone repository
```bash
git clone <backend-repo-link>
