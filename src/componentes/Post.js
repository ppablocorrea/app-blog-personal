import posts from "../data/posts";
import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();

  return (
    <>
      {posts[id - 1] ? (
        <div>
          <h1>{posts[id - 1].titulo}</h1>
          <p>{posts[id - 1].texto}</p>
        </div>
      ) : (
        <div>
          <h1>El articulo no existe.</h1>
        </div>
      )}
    </>
  );
}

export default Post;
