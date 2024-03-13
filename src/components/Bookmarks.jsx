const Bookmarks = ({ bookmarks, readTime }) => {
  return (
    <div className="md:w-1/3">
      <div className="p-8 mt-10 mb-8 border rounded-xl border-[#6047EC] bg-[#6047ec10]">
        <h2 className="text-2xl font-semibold text-[#6047EC]">
          Spent time on read : {readTime} min
        </h2>
      </div>
      <div className="p-8 border rounded-xl">
        <h2 className="text-2xl font-semibold">
          Bookmarked Blogs : {bookmarks.length}
        </h2>

        {bookmarks.map((blog, idx) => {
          return (
            <div key={idx} className="p-5 my-4 bg-gray-100 border rounded-xl">
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bookmarks;
