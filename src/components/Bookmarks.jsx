const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3">
      <div className="p-8 mt-10 border rounded-xl">
        <h2 className="text-2xl font-semibold">
          Bookmarked Blogs : {bookmarks.length}
        </h2>

        {bookmarks.map((title, idx) => {
          return (
            <div key={idx} className="p-5 my-4 bg-gray-100 border rounded-xl">
              <h2 className="text-2xl font-semibold">{title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bookmarks;
