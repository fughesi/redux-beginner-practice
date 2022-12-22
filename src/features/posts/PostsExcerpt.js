import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import { Link } from "react-router-dom";
import ReactionButton from "./ReactionButton";

import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

const PostsExcerpt = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));

  return (
    <article>
      <h2>{post.title}</h2>
      <p className="excerpt">
        {post.body.substring(0, 75)}

        <span>{post.body.length > 75 ? "... " : " "}</span>
      </p>
      <p className="postCredit">
        <Link to={`post/${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButton post={post} />
    </article>
  );
};

export default PostsExcerpt;
