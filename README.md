````markdown
# School Portal

A **School Listing Application** built using **Next.js** for the frontend and **Node.js + Express** with **MySQL** for the backend. This project allows users to **add, view, and search schools** with ease. Images are stored on **Cloudinary** for seamless media management.

---

## 🔗 Live Demo

Check out the live website here: [School Portal](https://school-portal-frontend-woad.vercel.app/)

**Note**: Due to the free deployment server on Render, data loading and uploading may take some time (approximately 50 seconds minimum) for the first request or after the server sleeps.

---

## 📂 Project Structure

### Frontend
- **Repository:** [Frontend Repo](https://github.com/sahiltonge/School-Portal-Frontend)
- Built using:
  - **Next.js 15**
  - **React 19**
  - **Tailwind CSS**
  - **Axios** for API requests
  - **react-hook-form** for form management
  - **react-hot-toast** for notifications

### Backend
- **Repository:** [Backend Repo](https://github.com/sahiltonge/School-Portal/tree/main/backend)
- Built using:
  - **Node.js + Express**
  - **MySQL** database
  - **Multer** + **Cloudinary** for image uploads

---

## ⚡ Features

1. **Add New School**
   - Fill a form with name, address, city, state, contact, email, and upload an image.
   - Image is automatically uploaded to **Cloudinary** instead of storing in the local `schoolImages` folder for better scalability, reliability, and easier access across different environments.
   - Form validation using `react-hook-form`.

2. **View Schools**
   - Fetch and display all schools from the backend.
   - Each school shows its image, name, address, and city.

3. **Search Schools**
   - Search schools by name.
   - Dynamic filtering of results as you type.

4. **Responsive Design**
   - Works on desktops, tablets, and mobile devices.
   - Clean and modern UI with Tailwind CSS.

---

## 🛠 Installation

### Frontend

```bash
git clone https://github.com/sahiltonge/School-Portal-Frontend.git
cd School-Portal-Frontend
npm install
npm run dev
````

### Backend

```bash
git clone https://github.com/sahiltonge/School-Portal.git
cd School-Portal/backend
npm install
npm start
```

> Make sure to configure your `.env` file with **MySQL** and **Cloudinary** credentials.

---

## 🌐 API Endpoints

### Add School

```
POST /api/schools
FormData: name, address, city, state, contact, email_id, image
```

### Get All Schools

```
GET /api/schools
```

### Search School by Name

```
GET /api/schools/search?name=<school_name>
```

---

##  Technologies Used

* **Frontend:** Next.js, React, Tailwind CSS, Axios, react-hook-form, react-hot-toast
* **Backend:** Node.js, Express.js, MySQL, Multer, Cloudinary
* **Deployment:** Frontend on Vercel, Backend on Render

---

##  Links

* **Live Site:** [https://school-portal-frontend-woad.vercel.app/](https://school-portal-frontend-woad.vercel.app/)
* **Frontend GitHub:** [https://github.com/sahiltonge/School-Portal-Frontend](https://github.com/sahiltonge/School-Portal-Frontend)
* **Backend GitHub:** [https://github.com/sahiltonge/School-Portal/tree/main/backend](https://github.com/sahiltonge/School-Portal/tree/main/backend)

---

##  Author

**Sahil Tonge**

* Email: [sahiltonge85@gmail.com](mailto:sahiltonge85@gmail.com)
* Location: Nagpur, Maharashtra, India

```

---
```
