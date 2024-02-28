import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Index';
import Login from './pages/Auth/Index';
import Process from './pages/Dictionary/Process/Index';
import Layout from "./components/layouts/layout";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dict/process" element={<Process />} />
      </Routes>
    </Layout>
  );
}

export default App;
