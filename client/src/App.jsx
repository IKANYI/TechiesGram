import { BrowserRouter, Routes, Route } from "react-router-dom";
import Head from "./components/Head.jsx";
import Home from "./pages/Home/Home.jsx";
import Explore from "./pages/Explore/Explore.jsx";
import Login from "./pages/Login/Login.jsx";
import Post from "./pages/Post/Post.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import VievPosts from "./pages/Admin/VievPosts.jsx";
import ViewUsers from "./pages/Admin/ViewUsers.jsx";
import "./assets/globals.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/post" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/viewPosts" element={<VievPosts />} />
          <Route path="/viewUsers" element={<ViewUsers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
