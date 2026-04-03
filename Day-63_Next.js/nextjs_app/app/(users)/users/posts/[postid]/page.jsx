"use client";

import { use } from "react";

const SingleProfilePost = (props) => {
  const user = use(props.params);
  console.log(user);
  return (
    <>
      <h1>Single Profile page</h1>
      <p className="text-lg font-semibold ">
        Welcome, {user.username}! postId:{user.postid}
      </p>
    </>
  );
};
export default SingleProfilePost;
