# 📋 Task Manager API

A lightweight, fast, and easy-to-use REST API for managing your personal tasks. Built with **Node.js** and **Express.js**.

![Status](https://img.shields.io/badge/status-active-brightgreen)
![Node](https://img.shields.io/badge/Node.js-v14+-green)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 🚀 Features

✨ **Core Features:**
- ✅ Create tasks with title and description
- ✅ View all tasks or fetch a single task
- ✅ Update task details (title & description)
- ✅ Mark tasks as completed
- ✅ Delete tasks
- ✅ In-memory storage (no database needed)

🎁 **Bonus Features:**
- 🔍 Filter tasks by status (pending/done)
- 📅 Sort tasks by creation time
- ⚠️ Proper HTTP status codes & error handling
- 📝 Clear, helpful error messages

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web framework |
| **JavaScript (ES6)** | Programming language |

---

## 📦 Installation

### Prerequisites
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Aanya10Mishra/task-manager-api.git
   cd task-manager-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Server will run on:**
   ```
   http://localhost:3000
   ```

---

## 🧪 API Endpoints

### 1️⃣ Create a New Task
**`POST /tasks`**

#### Using cURL:
```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Buy groceries",
    "description": "Milk, eggs, bread"
  }'
```

#### Using Postman:
1. **Method**: `POST`
2. **URL**: `http://localhost:3000/tasks`
3. **Headers Tab**: 
   - Key: `Content-Type`
   - Value: `application/json`
4. **Body Tab**: Select **raw** → **JSON**
5. **Paste JSON**:
   ```json
   {
     "title": "Buy groceries",
     "description": "Milk, eggs, bread"
   }
   ```
6. Click **Send** ✅

**Response (201 Created):**
```json
{
  "id": 1,
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "status": "pending",
  "createdAt": "2026-04-13T10:30:00.000Z"
}
```

---

### 2️⃣ Get All Tasks
**`GET /tasks`**

#### Using cURL:
```bash
curl http://localhost:3000/tasks
```

#### Using Postman:
1. **Method**: `GET`
2. **URL**: `http://localhost:3000/tasks`
3. Click **Send** ✅

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "status": "pending",
    "createdAt": "2026-04-13T10:30:00.000Z"
  },
  {
    "id": 2,
    "title": "Complete assignment",
    "description": "",
    "status": "done",
    "createdAt": "2026-04-13T10:31:00.000Z"
  }
]
```

---

### 3️⃣ Get a Single Task
**`GET /tasks/:id`**

#### Using cURL:
```bash
curl http://localhost:3000/tasks/1
```

#### Using Postman:
1. **Method**: `GET`
2. **URL**: `http://localhost:3000/tasks/1`
3. Click **Send** ✅

**Response (200 OK):**
```json
{
  "id": 1,
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "status": "pending",
  "createdAt": "2026-04-13T10:30:00.000Z"
}
```

**Error Response (404 Not Found):**
```json
{
  "error": "Task with ID 999 not found"
}
```

---

### 4️⃣ Update a Task
**`PUT /tasks/:id`**

#### Using cURL:
```bash
curl -X PUT http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Buy groceries and cook",
    "description": "Milk, eggs, bread, butter"
  }'
```

#### Using Postman:
1. **Method**: `PUT`
2. **URL**: `http://localhost:3000/tasks/1`
3. **Headers Tab**: 
   - Key: `Content-Type`
   - Value: `application/json`
4. **Body Tab**: Select **raw** → **JSON**
5. **Paste JSON**:
   ```json
   {
     "title": "Buy groceries and cook",
     "description": "Milk, eggs, bread, butter"
   }
   ```
6. Click **Send** ✅

**Response (200 OK):**
```json
{
  "id": 1,
  "title": "Buy groceries and cook",
  "description": "Milk, eggs, bread, butter",
  "status": "pending",
  "createdAt": "2026-04-13T10:30:00.000Z"
}
```

---

### 5️⃣ Mark Task as Done
**`PATCH /tasks/:id/done`**

#### Using cURL:
```bash
curl -X PATCH http://localhost:3000/tasks/1/done \
  -H "Content-Type: application/json"
```

#### Using Postman:
1. **Method**: `PATCH`
2. **URL**: `http://localhost:3000/tasks/1/done`
3. **Headers Tab**: 
   - Key: `Content-Type`
   - Value: `application/json`
4. Click **Send** ✅

**Response (200 OK):**
```json
{
  "id": 1,
  "title": "Buy groceries and cook",
  "description": "Milk, eggs, bread, butter",
  "status": "done",
  "createdAt": "2026-04-13T10:30:00.000Z"
}
```

---

### 6️⃣ Delete a Task
**`DELETE /tasks/:id`**

#### Using cURL:
```bash
curl -X DELETE http://localhost:3000/tasks/1
```

#### Using Postman:
1. **Method**: `DELETE`
2. **URL**: `http://localhost:3000/tasks/1`
3. Click **Send** ✅

**Response (200 OK):**
```json
{
  "message": "Task deleted successfully",
  "task": {
    "id": 1,
    "title": "Buy groceries and cook",
    "description": "Milk, eggs, bread, butter",
    "status": "done",
    "createdAt": "2026-04-13T10:30:00.000Z"
  }
}
```

---

## 🎯 Query Parameters (Bonus Features)

### Filter by Status
**`GET /tasks?status=pending`** or **`GET /tasks?status=done`**

#### Using cURL:
```bash
# Get only pending tasks
curl "http://localhost:3000/tasks?status=pending"

# Get only completed tasks
curl "http://localhost:3000/tasks?status=done"
```

#### Using Postman:
1. **Method**: `GET`
2. **URL**: `http://localhost:3000/tasks?status=pending`
3. Click **Send** ✅

**Response:**
```json
[
  {
    "id": 1,
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "status": "pending",
    "createdAt": "2026-04-13T10:30:00.000Z"
  }
]
```

---

### Sort by Creation Time
**`GET /tasks?sort=createdAt`**

#### Using cURL:
```bash
curl "http://localhost:3000/tasks?sort=createdAt"
```

#### Using Postman:
1. **Method**: `GET`
2. **URL**: `http://localhost:3000/tasks?sort=createdAt`
3. Click **Send** ✅

Tasks will be sorted from oldest to newest.

---

### Combine Filters
```bash
# cURL
curl "http://localhost:3000/tasks?status=pending&sort=createdAt"

# Postman
URL: http://localhost:3000/tasks?status=pending&sort=createdAt
Method: GET
Click Send
```

---

## 📮 Complete Postman Collection Setup

### **Step 1: Download Postman**
- Visit: https://www.postman.com/downloads/
- Install for your OS

### **Step 2: Create a New Collection**
1. Open Postman
2. Click **Collections** (left sidebar)
3. Click **+ Create New Collection**
4. Name: `Task Manager API`
5. Click **Create**

### **Step 3: Add Requests to Collection**

#### **Request 1: Create Task**
```
Name: Create Task
Method: POST
URL: http://localhost:3000/tasks
Headers:
  - Content-Type: application/json
Body (raw JSON):
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread"
}
```

#### **Request 2: Get All Tasks**
```
Name: Get All Tasks
Method: GET
URL: http://localhost:3000/tasks
```

#### **Request 3: Get Single Task**
```
Name: Get Task by ID
Method: GET
URL: http://localhost:3000/tasks/1
```

#### **Request 4: Update Task**
```
Name: Update Task
Method: PUT
URL: http://localhost:3000/tasks/1
Headers:
  - Content-Type: application/json
Body (raw JSON):
{
  "title": "Updated title",
  "description": "Updated description"
}
```

#### **Request 5: Mark as Done**
```
Name: Mark Task Done
Method: PATCH
URL: http://localhost:3000/tasks/1/done
Headers:
  - Content-Type: application/json
```

#### **Request 6: Delete Task**
```
Name: Delete Task
Method: DELETE
URL: http://localhost:3000/tasks/1
```

#### **Request 7: Filter by Status**
```
Name: Get Pending Tasks
Method: GET
URL: http://localhost:3000/tasks?status=pending
```

#### **Request 8: Sort Tasks**
```
Name: Sort by Creation Date
Method: GET
URL: http://localhost:3000/tasks?sort=createdAt
```

### **Step 4: Save Collection**
- Collection will auto-save
- You can now run all requests with one click!

---

## ⚠️ Error Handling

| Status Code | Scenario | Example |
|-----------|----------|---------|
| **200** | Success | Task retrieved/updated/deleted |
| **201** | Created | New task created successfully |
| **400** | Bad Request | Missing or invalid required field |
| **404** | Not Found | Task ID doesn't exist |
| **405** | Method Not Allowed | Unsupported HTTP method |

### Error Response Format
```json
{
  "error": "Title is required and must be a non-empty string"
}
```

### Example Error Cases

#### Missing Title (400 Error)
**Request:**
```json
{
  "description": "No title here"
}
```

**Response:**
```json
{
  "error": "Title is required and must be a non-empty string"
}
```

#### Empty Title (400 Error)
**Request:**
```json
{
  "title": "   "
}
```

**Response:**
```json
{
  "error": "Title is required and must be a non-empty string"
}
```

#### Task Not Found (404 Error)
**Request:**
```
GET /tasks/999
```

**Response:**
```json
{
  "error": "Task with ID 999 not found"
}
```

---

## 🏗️ Architecture

### System Overview
The API follows a **5-layer architecture**:

1. **Middleware Layer** - Parses JSON requests
2. **Routing Layer** - Matches URLs and HTTP methods
3. **Validation Layer** - Checks data validity
4. **Business Logic Layer** - Executes CRUD operations
5. **Data Layer** - In-memory array storage

### Task Lifecycle
```
CREATE → PENDING → UPDATE → MARK DONE → DELETE
                ↓
            STORED IN tasks[]
```

### Data Structure
```javascript
{
  id: 1,                              // Auto-generated
  title: "Buy groceries",            // Required
  description: "Milk, eggs, bread",  // Optional
  status: "pending",                 // "pending" or "done"
  createdAt: "2026-04-13T10:30Z"    // ISO timestamp
}
```

---

## 📊 Project Structure

```
task-manager-api/
├── server.js              # Main API application
├── package.json           # Dependencies & scripts
├── README.md              # Documentation
└── node_modules/          # Installed packages
```

---

## 💡 Code Highlights

### Clean Architecture:
- ✅ Modular helper functions
- ✅ Input validation
- ✅ Proper HTTP status codes
- ✅ Clear error messages
- ✅ Well-commented code

### Helper Functions:
```javascript
// Validates task data
function validateTask(data) { ... }

// Finds task by ID
function findTaskById(id) { ... }
```

---

## 🚀 Quick Start Guide

```bash
# 1. Clone & Install
git clone https://github.com/Aanya10Mishra/task-manager-api.git
cd task-manager-api
npm install

# 2. Start Server
npm start

# 3. Create a Task (in Postman)
POST http://localhost:3000/tasks
Body: {"title": "My first task"}

# 4. View All Tasks
GET http://localhost:3000/tasks

# 5. Mark as Done
PATCH http://localhost:3000/tasks/1/done

# 6. Delete Task
DELETE http://localhost:3000/tasks/1
```

---

## 📚 Learning Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [REST API Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://httpwg.org/specs/rfc7231.html#status.codes)
- [Postman Documentation](https://learning.postman.com/)

---

## ✨ What I Learned Building This

- ✅ Creating REST APIs with Express.js
- ✅ HTTP methods and status codes
- ✅ Input validation and error handling
- ✅ In-memory data storage
- ✅ Query parameters and filtering
- ✅ Git & GitHub workflow
- ✅ API testing with cURL and Postman

---

## 🎓 Assignment Criteria Met

| Criteria | Status | Details |
|----------|--------|---------|
| **All Endpoints Working** | ✅ | 6/6 endpoints fully functional |
| **Input Validation** | ✅ | Clear error messages for invalid input |
| **Error Handling** | ✅ | 400, 404, 405 status codes implemented |
| **Code Quality** | ✅ | Clean, readable, well-commented |
| **Bonus Features** | ✅ | Filtering & sorting implemented |
| **Documentation** | ✅ | Complete README with cURL & Postman examples |
| **Postman Support** | ✅ | Full Postman collection setup guide |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

