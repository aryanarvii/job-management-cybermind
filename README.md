# 🚀 Job Management Admin Interface  
### A Full-Stack MERN Application for Managing Job Postings  

> Built with **MongoDB, Express.js, React (Vite), and Node.js**, this project enables admins to create, filter, and manage job listings efficiently — complete with a polished UI and real-time features.

---

## 🌟 Overview  

This system allows **admins to create, view, and filter job postings** using multiple criteria such as Job Title, Location, Job Type, Salary Range, and Experience.  
The project demonstrates practical full-stack skills, attention to UI/UX design, and efficient API integration — making it a production-ready admin interface for job management platforms.

---

## 🧠 Features  

### 🖥️ Frontend (React + Tailwind + Vite)
- 🔍 **Advanced Filters:** Job Title, Location, Job Type, Salary Range  
- ⚡ **Dynamic Salary Range Slider:** Built using MUI Slider with live value updates  
- 🧾 **Job Cards:** Display job details, company logos, salary, and “posted time ago”  
- 🧰 **Create Job Modal:**  
  - Built with **React Hook Form** for validation  
  - Fields for Title, Company, Location(s), Job Type, Salary, Experience, Description, etc.  
  - Inline error handling and toast notifications  
  - Scrollable modal for smaller screens  
- 🧩 **Reusable Components:** Modular structure (Navbar, FilterBar, JobCard, Modal)  
- 🎨 **UI/UX Principles:** Modern, minimal, responsive, and accessible  

### ⚙️ Backend (Node + Express + MongoDB)
- 🧮 **CRUD APIs** for managing jobs (`/api/jobs`)  
- 🔎 **Advanced Filtering:** Title, location (array support), job type, salary & experience range  
- 🗂️ **Mongoose Model** with dynamic location array, timestamps, and validation  
- 🌐 **CORS + Axios Integration** for frontend communication  
- 🛠️ **Deployed** using **Render (Backend)** + **Vercel (Frontend)**  

---

## 🧩 Tech Stack  

| Layer | Technology |
|--------|-------------|
| **Frontend** | React, Vite, Tailwind CSS, React Hook Form, Axios, Lucide Icons |
| **Backend** | Node.js, Express.js, Mongoose, MongoDB Atlas |
| **Database** | MongoDB Atlas (Cloud) |
| **Hosting** | Vercel (Frontend) + Render (Backend) |
| **Tools** | Postman (API Testing), Git/GitHub, Cloud Storage for Logos |

---

## 🌍 Deployment

| Service               | Link                                                                           |
| --------------------- | ------------------------------------------------------------------------------ |
| **Frontend (Vercel)** | [https://job-management-cybermind.vercel.app/](https://job-management-cybermind.vercel.app/)   |
| **Backend (Render)**  | [https://job-management-backend-pjfk.onrender.com](https://job-management-backend-pjfk.onrender.com) |
| **API Base**          | `/api/jobs`                                                                    |


## 🧪 API Endpoints

| Method   | Endpoint        | Description                     |
| -------- | --------------- | ------------------------------- |
| `POST`   | `/api/jobs`     | Create a new job                |
| `GET`    | `/api/jobs`     | Get all jobs (supports filters) |
| `DELETE` | `/api/jobs/:id` | Delete job                      |


## 💡 Highlights
- Complete Product Thinking: Admin-focused UI, proper validation, filtering, and responsive design.
- Real-World Implementation: Salary & experience ranges, multi-location array, and company logos.
- Attention to Detail: Toasts, inline errors, “posted X hours ago”, and reusable UI components.
- Clean Code Architecture: Modular, scalable, and deployment-ready.
- DevOps Exposure: Hands-on deployment using Vercel, Render, and MongoDB Atlas.

---

### 🎯 Future Enhancements
- 🔒 Admin authentication
- 📊 Job analytics dashboard
- 📱 Pagination & search suggestions
- ☁️ Cloud logo uploads via Cloudinary
- 🏢 Company management module


## 👨‍💻 Author
### Aryan Arvind
- 💼 B.Tech in Computer and Communication Engineering
- 🚀 Passionate about building scalable web products and full-stack applications.
- 🔗 [LinkedIn](https://www.linkedin.com/in/aryan-arvind-6107a721b)
