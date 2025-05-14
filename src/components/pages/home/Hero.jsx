import image1 from './Assets/image1.png';
import image2 from './Assets/image2.png';
import { HashLink as Link } from 'react-router-hash-link';


function Hero (){
  return (
    <section id="hero">
      <nav className="w-full max-w-full fixed top-0 box-border px-5 py-4 bg-[#0cec40]/70 rounded-b-4xl flex justify-between items-center shadow-sm overflow-hidden z-10 ">
        <h1 className="text-2xl font-extrabold text-emerald-800">BudgetBuddy</h1>
          <ul className="hidden sm:flex space-x-6 text-gray-800 font-bold">
            <li><Link to="/#hero" className="hover:text-emerald-600 cursor-pointer">Home</Link></li>
            <li><Link to="/dashboard" className="hover:text-emerald-600 cursor-pointer">Dashboard</Link></li>
            <li><Link smooth to="/#insight"className="hover:text-emerald-600 cursor-pointer">Insights</Link></li>
            <li><Link smooth to="/#about" className="hover:text-emerald-600 cursor-pointer">About</Link></li>
          </ul>
      </nav>

      <div id="Hero" className="w-full h-screen flex flex-col justify-center mx-4">
        <div className="mt-50">
        <h2 className="text-4xl sm:text-7xl font-extrabold text-gray-800 mb-6 leading-tight">
          Budget Smarter.<br /> Spend with Purpose.
        </h2>
        <p className="text-2xl sm:text-xl text-gray-800 mb-8 w-160 ">
          Track your income and expenses. Get actionable insights. Take control of your money — finally.
        </p>
        <a
          href="/BudgetForm"
          className="w-fit rounded-4xl inline-block bg-[#0cec40]/70 text-gray-800 font-semibold px-6 py-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-250"
        >
          Track now
        </a>
        </div>
        <div className=" sticky flex justify-center items-center">
            <img src={image1} className="w-[450px] transition-transform hover:scale-105 hover:shadow-2xl border-2 border-orange-100 bg-white rotate-350 translate-x-130 -translate-y-45 "/>
            <img src={image2} className="w-[450px] transition-transform hover:scale-105 hover:shadow-2xl border-2 border-orange-100 bg-white rotate-12 translate-x-35"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
