Todo Application - Backend

Description

The Todo Application Backend is a Node.js + Express REST API that provides user authentication, todo management, and email verification. It supports JWT-based authentication, MongoDB storage, and CORS for frontend integration.

Features

✅ User Authentication (Register/Login with JWT)
✅ Email Verification (Mailgun/Gmail SMTP Integration)
✅ Todo Management (CRUD operations)
✅ Role-Based Access Control (Admin/User)
✅ MongoDB Database (Mongoose ORM)
✅ CORS Handling (Frontend can communicate with Backend)

1️⃣ Backend Setup (Node.js + Express + MongoDB)

🔹 Install Dependencies

npm install express mongoose dotenv cors bcryptjs jsonwebtoken nodemailer

🔹 Configure .env File

Create a .env file in the backend root folder:

MONGO_URI=mongodb+srv://yourUsername:yourPassword@your-cluster.mongodb.net/yourDatabase
JWT_SECRET=your_jwt_secret
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
BASE_URL=http://localhost:5000

🔹 Start Backend
