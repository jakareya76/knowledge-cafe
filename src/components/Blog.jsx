import PropTypes from "prop-types";
import markIcon from "../images/mark.svg";

const Blog = ({ blog }) => {
  const {
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
          <img src={markIcon} alt="mark icon" className="cursor-pointer" />
        </div>
      </div>
      <h2 className="my-4 text-2xl font-semibold">{title}</h2>

      {hashtags.map((hash) => {
        return (
          <span className="mx-2 text-gray-700 cursor-pointer">#{hash}</span>
        );
      })}
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
