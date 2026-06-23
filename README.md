# Food Ordering App

A full-stack food ordering application developed by **Priyanshu Patnare**.

## Live Application

**[Open Food Ordering App](https://food-ordering-frontend-t6tb.onrender.com)**

> The backend uses Render's free instance, so the first request may take up to
> a minute while the service wakes up.

## Features

- User registration and login with JWT authentication
- Browse meals by category
- Add meals to the shopping cart
- Place and track food orders
- View active orders and order history
- User profile and password management
- Employee and administrator management screens
- Meal and meal-category management

## Technologies

### Frontend

- React 18
- Redux Toolkit
- React Router
- Axios
- Bootstrap and React Bootstrap

### Backend

- Java 17
- Spring Boot 2.7
- Spring Security and JWT
- Spring Data JPA and Hibernate
- MySQL
- Maven
- Docker

### Deployment

- Frontend: Render Static Site
- Backend: Render Web Service
- Database: Railway MySQL

## Project Structure

```text
food-ordering-app/
|-- food-order-back/       Spring Boot backend
|-- food-ordering-front/   React frontend
`-- README.md
```

## Run Locally

### Backend

Create a MySQL database and provide these environment variables:

```text
DB_HOST=localhost
DB_PORT=3306
DB_NAME=foodorderDB
DB_USERNAME=root
DB_PASSWORD=your_password
```

Then run:

```bash
cd food-order-back
./mvnw spring-boot:run
```

On Windows:

```powershell
cd food-order-back
.\mvnw.cmd spring-boot:run
```

### Frontend

```bash
cd food-ordering-front
npm install
npm start
```

To use another backend, set:

```text
REACT_APP_API_URL=http://localhost:8080
```

## Author

**Priyanshu Patnare**

- GitHub: [priyanshupatnare2002-bit](https://github.com/priyanshupatnare2002-bit)
- Live project: [Food Ordering App](https://food-ordering-frontend-t6tb.onrender.com)
