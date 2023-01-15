import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Blog from "./pages/Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
