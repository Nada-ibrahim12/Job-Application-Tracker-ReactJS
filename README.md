# Job Application Tracker

A responsive, user-friendly web application that helps users **manage and track job applications** with ease. Built using **React.js**, **Vite**, and **Tailwind CSS**, the app supports **full CRUD functionality**, **data persistence**, **import/export of job data**, **search and filtering**, and **form validation** — everything you need to stay organized in your job hunt.

---

## 📁 Project Structure

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CountCard.jsx
│   │   ├── JobCard.jsx
│   │   └── Navbar.jsx
│   ├── context/
│   │   └── JobContext.jsx
│   ├── pages/
│   │   ├── AddJob.jsx
│   │   ├── Dashboard.jsx
│   │   ├── JobDetails.jsx
│   │   └── NotFound.jsx
│   ├── utils/
│   │   └── withRouter.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
├── jobs.json           // Test data for import
├── .gitignore
├── README.md
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── package-lock.json
├── eslint.config.js
└── index.html
```

---

## 🚀 Features

* ✅ **Add New Job Application**
* ✅ **Edit / Delete Existing Jobs**
* ✅ **Detailed View for Each Job**
* ✅ **Track Jobs by Status** (applied, interview, offer, rejected)
* ✅ **Count Cards** for application statistics
* ✅ **Search Jobs by Title or Company**
* ✅ **Filter Jobs by Status**
* ✅ **Import `.json` File** (with duplicate ID prevention and user warnings)
* ✅ **Export Job Data to `.json`**
* ✅ **Client-side Form Validation** (empty fields, duplicates, format checks)
* ✅ **User Feedback Messages**
* ✅ **Responsive UI** for Desktop and Mobile
* ✅ **Persistent Storage** using `localStorage`
* ✅ **React Router Navigation**
* ✅ **Context API for State Management**
* ✅ **Animated Modals and Cards** using `Framer Motion`
* ✅ **"Blob" Style Confirmation Dialogs**
* ✅ **Staggered Animations for Cards**

---

## 📦 Technologies Used

| Technology       | Purpose                       |
| ---------------- | ----------------------------- |
| React.js         | UI library                    |
| Vite             | Development build tool        |
| Tailwind CSS     | Styling and responsive layout |
| React Router DOM | Page routing/navigation       |
| Context API      | Global state management       |
| LocalStorage     | Persist job data locally      |
| UUID             | Generate unique job IDs       |
| Framer Motion    | Animations for modals, alerts & cards   |
| Fontawesome      | Icons                        |

---

## 📁 JSON File Format

Each job object should follow this structure for import:

```json
{
  "id": "uuid",
  "title": "Frontend Developer",
  "company": "TechCorp",
  "status": "applied",
  "dateApplied": "2025-07-30",
  "location": "Cairo, Egypt",
  "notes": "Sent resume via LinkedIn"
}
```

---

## 🧑‍💻 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/Nada-ibrahim12/job-application-tracker.git
cd job-application-tracker
npm install
```

### Run in Development

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📌 Validations & Warnings

* ⚠️ Prevents adding a job with **empty fields**
* ⚠️ Prevents adding jobs with **duplicate IDs**
* ⚠️ Displays warning messages for **skipped records** during import
* ✅ Provides success/error feedback after import/export/delete actions

---
🎨 UI/UX Enhancements
* Framer Motion-powered animations

* Animated toast-style alerts

* Blob-style confirmation modal with morph animation

* CountCard stats appear with staggered motion

* Smooth transitions across all interactive elements

---

## 📚 Topics Covered

* **React.js Core Concepts** (components, props, hooks)
* **Form Handling & Validation**
* **Dynamic Routing with React Router**
* **Global State with Context API**
* **LocalStorage Persistence**
* **Responsive Design with Tailwind CSS**
* **Search & Filter Logic**
* **File Handling (Import/Export JSON)**
* **Unique ID Generation with UUID**
* **Declarative Animations with Framer Motion**



---

## 🔮 Future Enhancements

These are planned features or areas for future improvement:

* 📝 **Pagination** for large numbers of job entries
* 📊 **Analytics Dashboard** (time to offer, application trends)
* ☁️ **Cloud Sync / Backend Integration**
* 🔒 **Authentication & User Accounts**
* 🌐 **Multi-language Support**
* 🗂️ **Tagging or Categorizing Jobs**
* 📅 **Calendar View** for application timeline

---

## 🤝 Contributions

This is a solo project built by **Nada Ibrahim** to deepen knowledge of React and frontend development. Contributions, ideas, and feedback are welcome and appreciated!

