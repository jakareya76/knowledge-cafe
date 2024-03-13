import { useState, useEffect } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogsData = async () => {
      const res = await fetch("blogs.json");
      const data = await res.json();

      setBlogs(data);
    };

    getBlogsData();
  }, []);

  console.log(blogs);

  return (
    <div className="md:w-2/3">
      {blogs.map((blog) => {
        return <Blog key={blog.id} blog={blog} />;
      })}
    </div>
  );
};

export default Blogs;
