import PropTypes from "prop-types";
import markIcon from "../images/mark.svg";

const Blog = ({ blog, handleAddBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="p-8 my-10 border rounded-xl">
      <img src={cover} alt="cover_img" className="object-cover w-full" />
      <div className="flex items-center justify-between my-4">
        <div className="flex items-center justify-center gap-3">
          <img src={author_img} alt="author_img" className="w-14" />
          <div>
            <h2 className="text-xl font-semibold">{author}</h2>
            <p className="text-gray-500">{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <p>{reading_time} min read</p>
          <img
            src={markIcon}
            alt="mark icon"
            className="cursor-pointer"
            onClick={() => handleAddBookmark(blog)}
          />
        </div>
      </div>
      <h2 className="my-4 text-2xl font-semibold">{title}</h2>

      {hashtags.map((hash, idx) => {
        return (
          <span key={idx} className="mx-2 text-gray-700 cursor-pointer">
            #{hash}
          </span>
        );
      })}
      <br />
      <button
        className="px-6 py-3 mt-4 text-xl border bg-gray-50"
        onClick={() => handleMarkAsRead(id, reading_time)}
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
