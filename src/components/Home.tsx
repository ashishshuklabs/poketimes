import React, { useEffect, useState } from "react";
import axios from "axios";
import IPost from "./IPost";
import { Link } from "react-router-dom";
import pokeball from "../logo.png";
const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    axios
      .get<IPost[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data.slice(0, 10));
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const postList = posts.length ? (
    posts.map((post) => {
      return (
        <div className="post card" key={post.id}>
          <img src={pokeball} alt="A pokeball" />
          <div className="card-content">
            <Link to={"/" + post.id}>
              <span className="card-title">{post.title}</span>
            </Link>
            <p>{post.body}</p>
          </div>
        </div>
      );
    })
  ) : (
    <div className="center">No posts loaded yet</div>
  );
  return (
    <div className="container home">
      <h4 className="center">Home</h4>
      {postList}
    </div>
  );
};
export default Home;
