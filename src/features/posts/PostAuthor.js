import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { Link } from "react-router-dom";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === Number(userId));

  return (
    <span>
      by
      {author ? (
        <Link to={`/user/${userId}`}>{author.name}</Link>
      ) : (
        "unkn author"
      )}
    </span>
  );
};

export default PostAuthor;
