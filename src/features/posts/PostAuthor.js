import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlices";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);

  console.log(author);

  return <span>by {author ? author.name : "unkn author"}</span>;
};

export default PostAuthor;
