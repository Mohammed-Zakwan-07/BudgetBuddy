import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/pages/home/Hero';
import About from './components/pages/home/About';
import DashBoards from './components/pages/dashboard/DashBoards';
import BudgetForm from './components/pages/BudgetForm/BudgetForm';
import Insight from './components/pages/home/Insight';
import Footer from './components/pages/home/Footer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<><Hero /><About /><Insight /><Footer /></>}/>
      <Route path="/BudgetForm" element={<BudgetForm />} />
      <Route path="/dashboard" element={<DashBoards />} />
    </Routes>
  );
}

export default App;
