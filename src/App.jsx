import { useState } from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleAddBookmark = (blog) => {
    setBookmarks((prev) => {
      return [...prev, blog];
    });
  };

  const handleMarkAsRead = (time) => {
    setReadTime((prev) => {
      return prev + time;
    });
  };

  console.log(bookmarks);

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
