import { useState, useEffect } from "react";
import Blog from "./Blog";

const Blogs = ({ handleAddBookmark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogsData = async () => {
      const res = await fetch("blogs.json");
      const data = await res.json();

      setBlogs(data);
    };

    getBlogsData();
  }, []);

  return (
    <div className="md:w-2/3">
      {blogs.map((blog) => {
        return (
          <Blog
            key={blog.id}
            blog={blog}
            handleAddBookmark={handleAddBookmark}
            handleMarkAsRead={handleMarkAsRead}
          />
        );
      })}
    </div>
  );
};

export default Blogs;
