import React from "react";
import Hero from "./Hero";
import { HashLink as Link } from 'react-router-hash-link';

function About() {
  return (
    <section id="about" className="w-screen h-screen">
      <div className="flex-col justify-center items-center  mt-30 m-20 space-y-10">
        <h1 className="font-extrabold text-6xl">What is BudgetBuddy AI ?</h1>
        <h1 className="text-xl w-180">BudgetBuddy is your personal finance sidekick — designed to help you manage your money like a pro without feeling like you're stuck in a spreadsheet dungeon. Built with modern web technologies and enhanced by AI, it’s here to make budgeting actually useful... and dare we say, fun?</h1>
      </div>
      <div className="flex justify-center items-center">
      </div>

      <h1 className="text-6xl font-extrabold m-10 ml-20">Features</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        <div className="shadow-2xl p-4 m-10 rounded-xl text-center hover:bg-[#0cec40]/70 hover:-translate-y-1 duration-300 ease-in-out transition-all"> 
          <p className="font-bold m-3">Smart Insights</p>
          <p>Using AI, we analyze your income, spending patterns, and financial goals to give real-time suggestions — not just charts.</p>
        </div>
        <div className="shadow-2xl p-4 m-10 rounded-xl text-center hover:bg-[#0cec40]/70 hover:-translate-y-1 duration-300 ease-in-out transition-all">
          <p className="font-bold m-3">Clean UI</p>
          <p>A modern dashboard built with React + Tailwind, giving you the tools to visualize your money in a way that actually makes sense.</p>
        </div>
        <div className="shadow-2xl p-4 m-10 rounded-xl text-center hover:bg-[#0cec40]/70 hover:-translate-y-1 duration-300 ease-in-out transition-all">
          <p className="font-bold m-3">You Own Your Data</p>
          <p>Privacy-first design. Everything stays on your device, unless you decide otherwise. No surprise fees. No weird data sales. </p>
        </div>
      </div>
    </section>
  );
};

export default About;