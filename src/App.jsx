import { useState } from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleAddBookmark = (blog) => {
    const id = blog.id;
    const title = blog.title;

    const newBlog = { id, title };

    setBookmarks((prev) => {
      return [...prev, newBlog];
    });
  };

  const handleMarkAsRead = (id, time) => {
    setReadTime((prev) => {
      return prev + time;
    });

    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );

    setBookmarks(remainingBookmarks);
  };

  return (
    <>
      <Header />
      <main className="container flex flex-col gap-5 mx-auto md:flex-row">
        <Blogs
          handleAddBookmark={handleAddBookmark}
          handleMarkAsRead={handleMarkAsRead}
        />
        <Bookmarks bookmarks={bookmarks} readTime={readTime} />
      </main>
    </>
  );
};

export default App;
