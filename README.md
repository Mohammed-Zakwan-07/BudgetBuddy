# 💸 BudgetBuddyAI

BudgetBuddyAI is a personal budgeting dashboard that helps users track income, expenses, and savings goals. Built with React and Tailwind CSS, it offers an intuitive and modern UI for managing finances, tracking transactions, and visualizing spending patterns.

---

## 🚀 Features

- ✅ Budget input form with income and categorized expenses
- ✅ Real-time dashboard displaying:
  - Total income
  - Total expenses
  - Balance calculation
  - Recent transactions
  - Savings goals
- ✅ Smart suggestions section (pre-filled for now)
- ✅ Modular component structure
- ✅ React Context API for global state management
- ✅ Navigation with React Router DOM and smooth scrolling via HashLink

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── Context/
│   │   └── BudgetContext.jsx
│   ├── pages/
│   │   ├── home/
│   │   │   └── About.jsx
│   │   ├── dashboard/
│   │   │   └── Dashboards.jsx
│   │   └── BudgetForm/
│   │       └── BudgetForm.jsx
├── App.jsx
├── main.jsx
└── index.css

```

## 🛠️ Tech Stack

- React — SPA frontend framework

- React Router DOM — for routing and navigation

- React Context API — for global state management

- Tailwind CSS — utility-first CSS framework

- HashLink — for smooth anchor navigation

## 📦 Installation

- Clone the repo and install dependencies:

- git clone https://github.com/Mohammed-Zakwan-07/BudgetBuddyAI.git

- cd BudgetBuddyAI

- npm install

## 📝 To-Do

- Add chart visualizations (Pie/Bar for expenses)

- Implement local storage or backend sync

- Dynamic suggestions based on expense trends

- Add user login/auth

- Add theme toggle (dark/light mode)
