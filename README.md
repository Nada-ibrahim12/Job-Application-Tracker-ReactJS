# Job Application Tracker

A responsive, user-friendly web application that helps users **manage and track job applications** with ease. Built using **React.js**, **Vite**, and **Tailwind CSS**, the project supports **CRUD functionality**, **data persistence**, **import/export of job data**, and **form validation** — everything you need to stay organized in your job hunt.

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
├── jobs.json        // for test
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

✅ **Add New Job Application**
✅ **Client-side Validations with Alerts** (e.g., prevent duplicate job IDs)
✅ **Edit / Delete Existing Jobs**
✅ **Detailed View for Each Job**
✅ **Track Jobs by Status** (e.g., applied, interviewing, rejected)
✅ **Count Cards** for job statistics
✅ **Import `.json` File** (with duplicate checking)
✅ **Export Jobs to `.json`**
✅ **Responsive UI** for Desktop & Mobile
✅ **Persistent Storage** using `localStorage`
✅ **React Router Navigation**
✅ **Context API State Management**

---

## 📦 Technologies Used

| Technology       | Purpose                        |
| ---------------- | ------------------------------ |
| React.js         | Frontend library               |
| Vite             | Lightning-fast dev environment |
| Tailwind CSS     | Utility-first styling          |
| React Router DOM | Routing and navigation         |
| Context API      | Global state management        |
| LocalStorage     | Job data persistence           |
| UUID             | Unique job IDs                 |

---

## 📁 JSON File Structure (`jobs.json`)

Each job object follows this format:

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

Clone the project and install dependencies:

```bash
git clone https://github.com/Nada-ibrahim12/job-application-tracker.git
cd job-application-tracker
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173)

### Production

```bash
npm run build
```

To preview production locally:

```bash
npm run preview
```

---

## 📌 Validations & Warnings

* Prevents submitting empty fields.
* Warns if trying to add a job with a duplicate ID.
* Shows error message if imported file contains duplicates.
* Displays confirmation before deleting a job.

---

## 🧪 Testing

This project currently includes manual testing. Automated unit tests may be added in future versions.

---

## 📚 Learn More

* [React Docs](https://reactjs.org/)
* [Vite Docs](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [React Router Docs](https://reactrouter.com/)
* [uuid](https://www.npmjs.com/package/uuid)

---

## 🤝 Contributions

This is a solo project built by **Nada Ibrahim** as part of her React.js learning journey. Suggestions and contributions are welcome for future versions.

