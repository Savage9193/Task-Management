# Task Management Dashboard

A production-ready Task Management Dashboard built with React, TypeScript, Tailwind CSS, Zustand, and Framer Motion.

## Features
- Create tasks with title, description, priority, and due date validation
- List/Card view toggle with drag-and-drop reordering
- Edit task in modal and delete task with confirmation modal
- Search by title/description and filter by status/priority
- Task stats: total, completed, pending
- Dark/Light mode toggle
- LocalStorage persistence
- Responsive SaaS-style UI with smooth animations
- Unit tests for `TaskCard` and `TaskForm`

## Tech Stack
- React + Vite + TypeScript
- Tailwind CSS
- Zustand
- Framer Motion
- React Icons
- React Beautiful DnD
- Jest + React Testing Library

## Setup
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Testing
```bash
npm test
```

## Folder Structure
```
src/
 ├── components/
 │    ├── common/
 │    └── task/
 ├── hooks/
 ├── store/
 ├── utils/
 ├── types/
 ├── pages/
 ├── App.tsx
 └── main.tsx
```

## Screenshots
- Dashboard light mode: `./screenshots/light-mode.png`
- Dashboard dark mode: `./screenshots/dark-mode.png`
- Task card/list view: `./screenshots/views.png`

## Live Demo
- Add your Vercel deployment link here: `https://your-vercel-url.vercel.app`

## Vercel Deployment
1. Push this project to GitHub.
2. Import the repository into Vercel.
3. Framework preset: `Vite`.
4. Build command: `npm run build`.
5. Output directory: `dist`.
