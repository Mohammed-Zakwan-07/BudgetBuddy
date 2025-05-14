import React, { useContext } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { BudgetContext } from "../../Context/BudgetContext";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer} from 'recharts';

function Dashboards() {
  const { budgetData } = useContext(BudgetContext);

  if (!budgetData) return (
    <div className='flex flex-col justify-center items-center space-y-5'>
      <p className="text-center mt-50">No data submitted yet 🤷‍♀️</p> 
      <a href="/BudgetForm" className="mb-75 rounded-4xl inline-block bg-[#0cec40]/70 text-gray-800 font-semibold px-6 py-3 shadow-md hover:shadow-lg hover:scale-105 transition">
          Enter here
      </a>
      <nav className="w-full max-w-full fixed top-0 box-border px-5 py-4 bg-[#0cec40]/70 rounded-b-4xl flex justify-between items-center shadow-sm overflow-hidden z-10 ">
        <h1 className="text-2xl font-extrabold text-emerald-800">BudgetBuddyAI</h1>
        <ul className="hidden sm:flex space-x-6 text-gray-800 font-bold">
          <li><Link to="/" className="hover:text-emerald-600 cursor-pointer">Home</Link></li>
          <li><Link to="/dashboard" className="hover:text-emerald-600 cursor-pointer">Dashboard</Link></li>
          <li><Link smooth to="/#insight" className="hover:text-emerald-600 cursor-pointer">Insights</Link></li>
          <li><Link to="/#about" className="hover:text-emerald-600 cursor-pointer">About</Link></li>
        </ul>
      </nav>
    </div>
  );

  const totalExpenses = budgetData.expenses.reduce(
    (acc, expense) => acc + Number(expense.amount || 0),
    0
  );

  const balance = budgetData.income - totalExpenses;

  return (
    <main className="w-screen h-screen">
      <nav className="w-full max-w-full fixed top-0 box-border px-5 py-4 bg-[#0cec40]/70 rounded-b-4xl flex justify-between items-center shadow-sm overflow-hidden z-10 ">
        <h1 className="text-2xl font-extrabold text-emerald-800">BudgetBuddyAI</h1>
        <ul className="hidden sm:flex space-x-6 text-gray-800 font-bold">
          <li><Link to="/" className="hover:text-emerald-600 cursor-pointer">Home</Link></li>
          <li><Link to="/dashboard" className="hover:text-emerald-600 cursor-pointer">Dashboard</Link></li>
          <li><Link smooth to="/#insight" className="hover:text-emerald-600 cursor-pointer">Insights</Link></li>
          <li><Link to="/#about" className="hover:text-emerald-600 cursor-pointer">About</Link></li>
        </ul>
      </nav>

      <div className='text-8xl font-extrabold text-emerald-600 ml-4 mt-25'>
        Hello, {budgetData.name}
      </div>

      <section id="summarycard">
        <h1 className='text-5xl font-bold mt-15 mx-4'>Dash Board</h1>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 ml-4 mt-10">
          <div className="bg-white rounded-xl p-4 shadow text-center">
            <p className="text-sm text-slate-500">Balance</p>
            <h2 className="text-xl font-bold text-orange-500">₹{balance}</h2>
          </div>

          <div className="bg-white rounded-xl p-4 shadow text-center">
            <p className="text-sm text-slate-500">Income</p>
            <h2 className="text-xl font-bold text-orange-500">₹{budgetData.income}</h2>
          </div>

          <div className="bg-white rounded-xl p-4 shadow text-center">
            <p className="text-sm text-slate-500">Expense</p>
            <h2 className="text-xl font-bold text-orange-500">₹{totalExpenses}</h2>
          </div>

          <div className="bg-white rounded-xl p-4 shadow text-center">
            <p className="text-sm text-slate-500">Goals</p>
            <button className='rounded-2xl px-10 py-2 bg-[#0cec40]/70 mt-5 hover:shadow-lg hover:scale-105 transition'>
              Add
            </button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mx-4 ">
        <div className="md:col-span-2 bg-white p-4 rounded-xl shadow ">
          <h3 className="text-lg font-semibold mb-2">Expense Breakdown</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={budgetData.expenses.map((e, i) => ({
                  name: e.category || `Category ${i + 1}`,
                  value: Number(e.amount)
                }))}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
              >
                {budgetData.expenses.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#a29bfe'][index % 5]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-xl shadow mx-4">
          <h3 className="text-lg font-semibold mb-2">Smart Suggestions </h3>
          <ul className="text-sm space-y-2 text-slate-600">
            <li>👉 Coming soon</li>
            <li>👉 Cominng soon</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow mb-8 mx-4">
        <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
        <table className="w-full text-sm">
          <thead className="text-left text-slate-500">
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {budgetData.expenses.map((exp, idx) => (
              <tr key={idx} className="border-t">
                <td>{exp.date}</td>
                <td>{exp.description}</td>
                <td>{exp.category}</td>
                <td className="text-red-500">-₹{exp.amount}</td>
                <td>{exp.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white p-4 rounded-xl shadow mx-4">
        <h3 className="text-lg font-semibold mb-4">Savings Goals</h3>
        <div className="space-y-4">
          {budgetData.savingsGoals?.map((goal, idx) => {
            const progress = (goal.savedAmount / goal.targetAmount) * 100;
            return (
              <div key={idx}>
                <p className="font-medium">{goal.name}</p>
                <div className="w-full bg-slate-200 h-3 rounded-full mt-1">
                  <div
                    className="bg-orange-500 h-3 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-slate-500">
                  ₹{goal.savedAmount} saved of ₹{goal.targetAmount}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Dashboards;
