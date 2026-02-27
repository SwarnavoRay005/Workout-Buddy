# 🏋️ Workout Buddy – Full Stack MERN Application

Workout Buddy is a full-stack CRUD application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).  
It allows users to create, view, update, and delete workout records through a responsive and intuitive interface.

This project demonstrates complete frontend-backend integration, RESTful API design, and MongoDB database management using Mongoose.

---

## 🚀 Features

- View all workouts  
- View a specific workout  
- Create new workouts  
- Update existing workouts  
- Delete workouts  
- RESTful API implementation  
- MongoDB integration using Mongoose  
- CORS configured for frontend-backend communication  
- Fully connected React frontend  

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- Axios  
- CSS  

### Backend
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- CORS  
- dotenv  

---

## 📂 Project Structure

```
workout-buddy/
│
├── backend/
│   ├── models/
│   │   └── workoutModel.js
│   ├── controllers/
│   │   └── workoutController.js
│   ├── routes/
│   │   └── workoutRoutes.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/workout-buddy.git
cd workout-buddy
```

---

## 🔧 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm start
```

Server runs at:
```
http://localhost:5000
```

---

## 🎨 Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

Frontend runs at:
```
http://localhost:3000
```

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|------------|
| GET    | /api/workouts          | Get all workouts |
| GET    | /api/workouts/:id      | Get specific workout |
| POST   | /api/workouts          | Create workout |
| PATCH  | /api/workouts/:id      | Update workout |
| DELETE | /api/workouts/:id      | Delete workout |

---

## 🧠 How It Works

- React frontend sends HTTP requests using Axios.  
- Express handles routing and controller logic.  
- Mongoose manages MongoDB schemas and queries.  
- CORS enables cross-origin communication.  
- UI updates dynamically after CRUD operations.  

---

## 🎯 Learning Outcomes

- Built RESTful APIs using Express.js  
- Implemented full CRUD operations  
- Connected React frontend with Node backend  
- Designed MongoDB schemas with Mongoose  
- Managed environment variables securely  
- Handled cross-origin resource sharing (CORS)  

---

## 🔮 Future Improvements

- Add authentication using JWT  
- Implement user-specific workouts  
- Add input validation and error handling UI  
- Deploy using Render / Vercel / Railway  
- Add pagination and search functionality  

---

## 👨‍💻 Author

Swarnavo Ray  
BCA Student | MERN Stack Developer | AI/ML Enthusiast  

---

## 📄 License

This project is open-source and available under the MIT License.
