
Todo Application (Full Stack)

Description

The Todo Application is a full-stack web app that allows users to register, log in, and manage their tasks efficiently. The application features secure authentication, email verification, and JWT-based session management. Users can create, view, and delete todos, ensuring an organized task-tracking system.

This project is built with:

Backend: Node.js, Express.js, MongoDB (Mongoose ORM)

Frontend: React.js (Axios for API calls)

Authentication: JWT (JSON Web Token)

Email Services: Nodemailer (Gmail/Mailgun SMTP)

Features

✅ User Authentication (Register/Login with JWT)
✅ Email Verification (Mailgun/Gmail SMTP Integration)
✅ Todo Management (Add, View, Delete Todos)
✅ Protected Routes (Only logged-in users can access Todos)
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

npm start  # or nodemon for development

2️⃣ Frontend Setup (React.js)

🔹 Install React & Axios

npx create-react-app todo-frontend
cd todo-frontend
npm install axios

🔹 Configure API Calls

Inside src/App.js, ensure API calls point to http://localhost:5000/api.

🔹 Start React App

npm start

3️⃣ API Endpoints

Authentication

Method

Endpoint

Description

POST

/api/auth/register

Register a new user

POST

/api/auth/login

Login and get JWT token

Todos

Method

Endpoint

Description

GET

/api/todos

Get all todos (Authenticated)

POST

/api/todos

Add a new todo (Authenticated)

DELETE

/api/todos/:id

Delete a todo (Authenticated)

4️⃣ Testing with Postman

Register a user using POST /api/auth/register.

Login using POST /api/auth/login to get a JWT token.

Save the JWT Token in Postman for authenticated requests.

Create a Todo using POST /api/todos with token.

Retrieve Todos using GET /api/todos.

5️⃣ Deployment

Backend (Node.js)

Use Render/Vercel for free Node.js hosting.

Use MongoDB Atlas as the database.

Frontend (React.js)

Deploy React on Vercel/Netlify.

🔥 Troubleshooting

1️⃣ CORS Issue (React can't call API)

✔ Fix: Ensure server.js has this:

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

2️⃣ MongoDB Connection Failed

✔ Fix: Add 0.0.0.0/0 in MongoDB IP Whitelist.

3️⃣ Email Not Sending

✔ Fix: Still having issues with this

🚀 Author & Contributions

Built by: Uchenna Joel Eze



