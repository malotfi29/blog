import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogsLayout from "./features/blogs/BlogsLayout";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import CategoryBlogs from "./pages/CategoryBlogs";
import Profile from "./pages/Profile";
import PostsTable from "./features/profile/posts/PostsTable";
import Dashboard from "./features/profile/Dashboard";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Routes>
        <Route path="blogsLayout" element={<BlogsLayout />}>
          <Route index element={<Navigate to="blogs" replace />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="categoryBlogs/:slug" element={<CategoryBlogs />} />
          <Route path="blogs/:slug" element={<Blog />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile" element={<Profile />}>
          <Route index element={<Dashboard to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="posts" element={<PostsTable />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
