import posts from "../data/posts";
import { NavLink } from "react-router-dom";

function Blog() {
  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <NavLink to={`/post/${post.id}`}>{post.titulo}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Blog;
