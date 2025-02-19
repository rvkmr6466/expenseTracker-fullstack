# 🚀 Expense Tracker - Fullstack Application

A full-stack expense tracking application built with **Angular** (frontend) and **Spring Boot** (backend).

---

## 🛠️ Technologies Used

### 🌐 Frontend (Angular)
- **Angular CLI**: v17.x
- **Node.js**: v20.x
- **TypeScript**: v5.x
- **Bootstrap** (for styling)

### ⚙️ Backend (Spring Boot)
- **Java**: v22
- **Spring Boot**: v3.4.2
- **Spring Security** (for authentication & authorization)
- **JWT Authentication**
- **JPA/Hibernate** (ORM for database interaction)
- **Gradle**: v8.12.1

### 🗄️ Database
- **MySQL** (Relational Database Management System)

---

## ✨ Features
✅ **User Authentication (JWT-based login & registration)**  
✅ **Expense Management (Create, Read, Update, Delete - CRUD)**  
✅ **Category Management**  
✅ **Secure API Endpoints with Role-based Access Control**  
✅ **Responsive UI with Bootstrap**  
✅ **CORS Configuration for Frontend Integration**  
✅ **Password Encryption using BCrypt**  

---

## 📂 Project Structure

```plaintext
expense-tracker/
├── et-fe/          # Angular frontend
├── et-back/        # Spring Boot backend
└── README.md       # Documentation
```

---

## ⚡ Setup and Installation

### 🔹 Backend Setup

1. Navigate to the backend directory:
   ```sh
   cd et-back
   ```
2. Copy `application.properties_sample` to `application.properties`:
   ```sh
   cp application.properties_sample application.properties
   ```
3. Configure your **database settings** in `application.properties`.
4. Build the project:
   ```sh
   ./gradlew build
   ```
5. Run the application:
   ```sh
   ./gradlew bootRun
   ```

### 🔹 Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd et-fe
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   ng serve
   ```
4. Open your browser and go to:  
   **`http://localhost:4200`**

---

## 🔗 API Endpoints

### 🔑 Authentication
- **POST** `/api/auth/login` - User login
- **POST** `/api/auth/register` - User registration

### 💰 Expenses
- **GET** `/api/expenses` - Get all expenses
- **GET** `/api/expenses/{id}` - Get expense by ID
- **POST** `/api/expenses` - Create a new expense
- **PUT** `/api/expenses/{id}` - Update an expense
- **DELETE** `/api/expenses/{id}` - Delete an expense

### 🏷️ Categories
- **GET** `/api/categories` - Get all categories
- **POST** `/api/categories` - Create a new category
- **PUT** `/api/categories/{id}` - Update a category
- **DELETE** `/api/categories/{id}` - Delete a category

---

## 🔒 Security

- **JWT-based authentication** for secure API access.
- **Password encryption** using BCrypt.
- **Role-based access control** to protect sensitive routes.
- **CORS configuration** to allow frontend-backend communication.

---

## 👥 Contributing

We welcome contributions! To contribute:

1. **Fork** the repository.
2. Create your feature branch:
   ```sh
   git checkout -b feature/AmazingFeature
   ```
3. **Commit** your changes:
   ```sh
   git commit -m "Add some AmazingFeature"
   ```
4. **Push** to the branch:
   ```sh
   git push origin feature/AmazingFeature
   ```
5. Open a **Pull Request** 🚀

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📌 Additional Enhancements (Future Scope)
- 📊 **Expense Analytics** (Charts & Reports)
- 📅 **Recurring Expenses** feature
- 🌍 **Multi-language support**
- 💳 **Payment Integration** for tracking payments
- 📱 **Mobile App** using Ionic/React Native

---

## 🛠 Troubleshooting

### ❓ Common Issues & Solutions
**1. Angular frontend not loading?**  
👉 Make sure the backend is running (`./gradlew bootRun`).

**2. Database connection error?**  
👉 Check MySQL service is running and credentials in `application.properties`.

**3. JWT token issue?**  
👉 Ensure you include the token in API requests (`Authorization: Bearer <token>`).

---
