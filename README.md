PROJECT NEXUS ECOMMERCE PROJECT BY AHMED ALIYU SAID elahmdo0@gmail.com

# 🛍️ Nexus E-Commerce App

Nexus is a modern e-commerce product catalog built with **React (Vite)**, **TypeScript**, and **Tailwind CSS**.  
The project demonstrates API integration, filtering, sorting, pagination, infinite scrolling, and product details pages — all in a responsive, user-friendly interface.

---

## 📖 How the Project Started

I began this project by setting up a **React app with Vite** for fast development and integrated **Tailwind CSS** for styling.  
To ensure type safety and scalability, I used **TypeScript** throughout the project.

The app was developed with proper **Git practices** (clear commit messages, feature-based commits, and version control).  
This helped me structure the workflow efficiently and maintain clean code.

---

## 🎯 Project Goals

The primary objectives of the Nexus product catalog are:

- **API Integration** → Fetch and display dynamic product data from a backend API.
- **User Convenience** → Implement filtering and sorting to improve product discovery.
- **Enhanced Experience** → Build a responsive, user-friendly interface with smooth navigation and optimized performance.

---

## 🛠️ Technologies Used

- ⚛️ **React (Vite)** → Component-based UI development
- 🟦 **TypeScript** → Type safety and maintainable code
- 🎨 **Tailwind CSS** → Modern, responsive UI styling

---

## ✨ Key Features

### 1. 🔗 API Data Integration

- Fetch and display product data dynamically from the **DummyJSON API**.
- Handle loading states and errors gracefully for a smooth experience.

### 2. 🧩 Filtering and Sorting

- **Category Filtering** → View products by category.
- **Price Sorting** → Sort products in ascending or descending order.
- **Combined Filters** → Use multiple criteria together for refined results.

### 3. 📑 Pagination & Infinite Scrolling

- **Pagination** → Numbered navigation for browsing products in chunks. i commented out the pagination because i thought it was redundant with the infiite scrool feature you can uncomment it out to see it in action. you are my mentor so im sure you know how to do that lol
- **Infinite Scrolling** → Products load dynamically as users scroll.
  - Implemented using `useRef` with an **invisible loader div**.
  - An **Intersection Observer** detects when this div enters the viewport and automatically loads more products.

### 4. 📱 Responsive Design

- Fully responsive layout for **desktop, tablet, and mobile devices**.
- Designed with Tailwind CSS utility classes for flexibility and speed.

### 5. 📄 Product Details Page

- Each product has its **own details page**.
- Implemented using **React Router dynamic routes** (`/product/:id`).
- Displays product-specific information such as images, price, description, and reviews.

---

## ⚡ Challenges & Solutions

The most difficult challenge I faced was implementing **server-side filtering** and **infinite scrolling**.

- At first, infinite scroll was tricky.
- With research, I learned to use `useRef` to create a loader div and then applied **Intersection Observer** to detect when the div entered the viewport.
- This allowed me to load additional products seamlessly without requiring the user to click pagination buttons.

---

## ✅ Conclusion

The Nexus E-Commerce App taught me how to:

- Integrate APIs effectively.
- Implement advanced UI features like **filtering, sorting, pagination, and infinite scrolling**.
- Use **TypeScript and Tailwind CSS** together to build a scalable, responsive project.
- Solve challenges through research and apply real-world patterns like **Intersection Observer** for user experience improvements.
- A tiny little bit of design as i had to make a figma ui to later implement

---

## 🌐 Deployment

The app has been deployed using **Vercel** or **Netlify** for public access. link:
