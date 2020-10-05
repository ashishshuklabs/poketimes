import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import axios from "axios";
import IPost from "./IPost";
//define the post_id field to be read using match.params property
interface IPostID {
  post_id: string;
}
//Extend it with RouterComponentProps
interface IRouteType extends RouteComponentProps<IPostID> {}
const Post: React.FC<IRouteType> = (props) => {
  //vola post_id is acceptable now.
  let postId: string = props.match.params.post_id;
  const [post, setPost] = useState<IPost | null>(null);
  //Get the post content
  useEffect(() => {
    axios
      .get<IPost>("https://jsonplaceholder.typicode.com/posts/" + postId)
      .then((res) => {
        setPost(res.data);
      });
  }, []);

  const displayPost = post ? (
    <div className="post">
      <h4 className="center">{post.title}</h4>
      <p>{post.body}</p>
    </div>
  ) : (
    <div className="center">Post still loading....</div>
  );
  return <div className="container">
      {displayPost}
  </div>;
};

export default Post;
