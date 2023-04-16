import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Info from "./pages/Info";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import CreateBlog from "./pages/CreateBlog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/blog/create" element={<CreateBlog />} />
      <Route path="/blog/create/:id" element={<CreateBlog />} />
    </Routes>
  );
}

export default App;
