import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";

const App = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto md:flex">
        <Blogs />
        <Bookmarks />
      </main>
    </>
  );
};

export default App;
