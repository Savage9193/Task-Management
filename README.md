# 🚀 Task Management Dashboard

A modern, scalable **Task Management Dashboard** built with **React + TypeScript**, designed with real-world architecture, clean UI principles, and performance-focused patterns.

This project demonstrates how a mid-level frontend developer approaches **state management, UI consistency, modular architecture, and user experience**.

---

## ✨ Live Demo

👉 https://task-management-v1-pied.vercel.app/

---

## 🎯 Project Objective

The goal of this project was to build a **production-ready task manager**, not just a CRUD app.

Key focus areas:

* Clean and scalable folder structure
* Maintainable component design
* Consistent UI system
* Smooth user experience with animations
* Real-world state management approach

---

## ⚡ Features Breakdown

### 🧩 Core Features

* ✅ Create tasks with validation (title, description, priority, due date)
* ✅ Edit tasks via modal (clean UX)
* ✅ Delete tasks with confirmation dialog
* ✅ Mark tasks as completed/incomplete with visual feedback
* ✅ Persistent data using localStorage

---

### 🔍 Search & Filtering

* 🔎 Search by title and description (instant filtering)
* 🎯 Filter by:

  * Status: All / Completed / Pending
  * Priority: Low / Medium / High

---

### 📊 Dashboard Insights

* 📌 Total Tasks
* ⏳ Pending Tasks
* ✅ Completed Tasks

---

### 🎨 UI/UX Enhancements

* 🌓 Dark / Light mode toggle
* 🔄 List ↔ Card view toggle
* 🎯 Priority-based color coding
* ✨ Smooth animations using Framer Motion
* 📱 Fully responsive (mobile-first design)

---

### 🧠 Advanced Features (Bonus)

* 🧲 Drag-and-drop task reordering
* ⚡ Optimized rendering (avoiding unnecessary re-renders)
* 🧱 Reusable component system
* 🧪 Unit testing (TaskCard & TaskForm)

---

## 🛠 Tech Stack

| Category    | Technology                   |
| ----------- | ---------------------------- |
| Framework   | React (Vite)                 |
| Language    | TypeScript                   |
| Styling     | Tailwind CSS                 |
| State Mgmt  | Zustand                      |
| Animations  | Framer Motion                |
| Drag & Drop | React Beautiful DnD          |
| Icons       | React Icons                  |
| Testing     | Jest + React Testing Library |

---

## 🏗 Architecture & Design Decisions

### 1. State Management (Zustand)

* Chosen for simplicity over Redux
* Minimal boilerplate
* Centralized task logic:

  * addTask
  * updateTask
  * deleteTask
  * toggleTask
  * reorderTasks

---

### 2. Component Structure

* Separation of concerns:

  * `common/` → reusable UI components
  * `task/` → domain-specific components
* Keeps code scalable and readable

---

### 3. UI System (Design Consistency)

* Centralized color system (`constants.ts`)
* Consistent spacing, typography, and interaction patterns
* SaaS-inspired modern UI

---

### 4. Performance Considerations

* Memoized components where needed
* Minimal re-renders
* Lightweight state updates

---

### 5. Code Philosophy

* DRY (Don’t Repeat Yourself)
* KISS (Keep It Simple, Stupid)
* Clean, readable, maintainable code

---

## 📁 Folder Structure

```
src/
 ├── components/
 │    ├── common/        # Reusable UI components
 │    ├── task/          # Task-specific components
 │
 ├── hooks/              # Custom hooks
 ├── store/              # Zustand store
 ├── utils/              # Constants & helpers
 ├── types/              # TypeScript types
 ├── pages/              # Main pages
 ├── App.tsx
 └── main.tsx
```

---

## 🧪 Testing

Basic unit tests implemented for:

* TaskCard rendering
* TaskForm submission

Run tests:

```bash
npm test
```

---

## ⚙️ Setup & Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 🏗 Build for Production

```bash
npm run build
npm run preview
```

---

## 🚀 Deployment (Vercel)

Steps followed:

1. Pushed code to GitHub
2. Imported repo into Vercel
3. Selected **Vite** preset
4. Build command: `npm run build`
5. Output: `dist`
---

## 👨‍💻 Author

Built as part of a frontend assignment to demonstrate:

* Real-world coding practices
* UI/UX understanding
* Scalable architecture

---
