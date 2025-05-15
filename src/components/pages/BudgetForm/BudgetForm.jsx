import React from "react";
import { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BudgetContext } from "../../Context/BudgetContext";


const BudgetForm = () => {
  const { setBudgetData } = useContext(BudgetContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    income: '',
    expenses: [{ date: '', amount: '', type: '', description: '', category: '' }],
    savingsGoals: [{ name: '', targetAmount: '', savedAmount: '' }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleExpenseChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExpenses = [...formData.expenses];
    updatedExpenses[index][name] = value;
    setFormData((prev) => ({ ...prev, expenses: updatedExpenses }));
  };

  const handleGoalChange = (index, e) => {
    const { name, value } = e.target;
    const updatedGoals = [...formData.savingsGoals];
    updatedGoals[index][name] = value;
    setFormData((prev) => ({ ...prev, savingsGoals: updatedGoals }));
  };

  const addExpense = () =>
    setFormData((prev) => ({
      ...prev,
      expenses: [...prev.expenses, { date: '', amount: '', type: '', description: '', category: '' }]
    }));

  const addGoal = () =>
    setFormData((prev) => ({
      ...prev,
      savingsGoals: [...prev.savingsGoals, { name: '', targetAmount: '', savedAmount: '' }]
    }));

    const handleSubmit = (e) => {
    e.preventDefault();
    setBudgetData(formData);
    navigate("/dashboard");
  };

  return (
    <section>
      <nav className="w-full max-w-full fixed top-0 box-border px-5 py-4 bg-[#0cec40]/70 rounded-b-4xl flex justify-between items-center shadow-sm overflow-hidden z-10 ">
              <h1 className="text-2xl font-extrabold text-emerald-800">BudgetBuddyAI</h1>
                <ul className="hidden sm:flex space-x-6 text-gray-800 font-bold">
                  <li><Link to="/#hero" className="hover:text-emerald-600 cursor-pointer">Home</Link></li>
                  <li><Link to="/dashboard" className="hover:text-emerald-600 cursor-pointer">Dashboard</Link></li>
                  <li><Link to="/dashboard"className="hover:text-emerald-600 cursor-pointer">Insights</Link></li>
                  <li><Link smooth to="/#about" className="hover:text-emerald-600 cursor-pointer">About</Link></li>
                </ul>
            </nav>
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white shadow-lg p-6 rounded-xl space-y-6 mt-20">
      <h2 className="text-2xl font-bold text-slate-700">Budget Form 📊</h2>

      {/* Basic Info */}
      <div>
        <label className="block text-slate-600 font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border-2 border-orange-200 focus:border-green-400 rounded-lg px-4 py-2 mt-1"
        />
      </div>

      <div>
        <label className="block text-slate-600 font-medium">Monthly Income (₹)</label>
        <input
          type="number"
          name="income"
          value={formData.income}
          onChange={handleChange}
          className="w-full border-2 border-orange-200 focus:border-green-400 rounded-lg px-4 py-2 mt-1"
        />
      </div>

      {/* Expenses */}
      <div>
        <h3 className="text-lg font-semibold text-slate-700 mb-2">Expenses 💸</h3>
        {formData.expenses.map((expense, i) => (
          <div key={i} className="grid grid-cols-2 gap-4 mb-4">
            {["date", "amount", "type", "description", "category"].map((field) => (
              <input
                key={field}
                name={field}
                placeholder={field}
                value={expense[field]}
                onChange={(e) => handleExpenseChange(i, e)}
                className="border-2 border-orange-200 focus:border-green-400 rounded-lg px-3 py-2"
              />
            ))}
          </div>
        ))}
        <button type="button" onClick={addExpense} className="text-green-600 font-medium">
          ➕ Add Expense
        </button>
      </div>

      {/* Savings Goals */}
      <div>
        <h3 className="text-lg font-semibold text-slate-700 mb-2">Savings Goals 🏦</h3>
        {formData.savingsGoals.map((goal, i) => (
          <div key={i} className="grid grid-cols-3 gap-4 mb-4">
            {["name", "targetAmount", "savedAmount"].map((field) => (
              <input
                key={field}
                name={field}
                placeholder={field}
                value={goal[field]}
                onChange={(e) => handleGoalChange(i, e)}
                className="border-2 border-orange-200 focus:border-green-400 rounded-lg px-3 py-2"
              />
            ))}
          </div>
        ))}
        <button type="button" onClick={addGoal} className="text-green-600 font-medium">
          ➕ Add Goal
        </button>
      </div>

      <button
        type="submit"
        href="/DashBoard"
        className="w-full bg-green-400 hover:bg-green-500 transition-colors text-white font-semibold py-2 px-4 rounded-full"
      >
        Submit ✅
      </button>
    </form>
    </section>
  );
};

export default BudgetForm;
