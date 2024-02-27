import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Index';
import Login from './pages/Auth/Index';
import Process from './pages/Dictionary/Process/Index';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dict/process" element={<Process />} />
    </Routes>
  );
}

export default App;
