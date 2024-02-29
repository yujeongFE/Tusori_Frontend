import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layouts/layout";
import Home from "./pages/Home/Index";
import Login from "./pages/Auth/Index";
import Process from "./pages/Dictionary/Process/Index";
import Words from "./pages/Dictionary/Words/Index";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dict/process" element={<Process />} />
        <Route path="/dict/words" element={<Words />} />
      </Routes>
    </Layout>
  );
};

export default App;
