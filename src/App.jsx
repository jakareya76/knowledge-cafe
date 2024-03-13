import { useState } from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmark = (blog) => {
    setBookmarks((prev) => {
      return [...prev, blog];
    });
  };

  console.log(bookmarks);

  return (
    <>
      <Header />
      <main className="container flex flex-col gap-5 mx-auto md:flex-row">
        <Blogs handleAddBookmark={handleAddBookmark} />
        <Bookmarks bookmarks={bookmarks} />
      </main>
    </>
  );
};

export default App;
