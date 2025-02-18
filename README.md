# Expense Tracker - Fullstack Application

A fullstack expense tracking application built with Angular (frontend) and Spring Boot (backend).

## Technologies Used

### Frontend (Angular)
- Angular CLI: version 17.x
- Node.js: version 20.x
- TypeScript: version 5.x
- Bootstrap (for styling)

### Backend (Spring Boot)
- Java: version 22
- Spring Boot: version 3.4.2
- Spring Security
- JWT Authentication
- JPA/Hibernate
- Gradle: version 8.12.1

### Database
- MySQL

## Features
- User Authentication (JWT)
- Expense Management (CRUD operations)
- Category Management
- Secure API endpoints
- Responsive UI

## Prerequisites
- JDK 22
- Node.js and npm
- MySQL Server
- Gradle
- Angular CLI (`npm install -g @angular/cli`)

## Project Structure
```plaintext
et/
├── et-fe/          # Angular frontend
├── et-back/        # Spring Boot backend
└── README.md

Setup and Installation
Backend Setup
1. Navigate to `et-back` directory
2. Copy application.properties_sample to application.properties
3. Configure your database settings in application.properties
4. Build the project:
./gradlew build

5. Run the application:
./gradlew bootRun

Frontend Setup
1. Navigate to et-fe directory
2. Install dependencies:
npm install
3. Start the development server:
ng serve

API Endpoints
Authentication
POST /api/auth/login - User login
POST /api/auth/register - User registration
Expenses
GET /api/expenses - Get all expenses
GET /api/expenses/{id} - Get expense by ID
POST /api/expenses - Create new expense
PUT /api/expenses/{id} - Update expense
DELETE /api/expenses/{id} - Delete expense
Categories
GET /api/categories - Get all categories
POST /api/categories - Create new category
PUT /api/categories/{id} - Update category
DELETE /api/categories/{id} - Delete category
Security
JWT-based authentication
Password encryption using BCrypt
Protected API endpoints
CORS configuration for frontend integration
Contributing
Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
License
This project is licensed under the MIT License - see the LICENSE file for details

This README provides a comprehensive overview of your project, including:
- Technology stack and versions
- Setup instructions for both frontend and backend
- API endpoint documentation
- Project structure
- Security features
- Contributing guidelines

You can further customize it by adding:
- Screenshots of the application
- More detailed configuration instructions
- Deployment guidelines
- Troubleshooting section
- Code examples
This README provides a comprehensive overview of your project, including:
- Technology stack and versions
- Setup instructions for both frontend and backend
- API endpoint documentation
- Project structure
- Security features
- Contributing guidelines

You can further customize it by adding:
- Screenshots of the application
- More detailed configuration instructions
- Deployment guidelines
- Troubleshooting section
- Code examples