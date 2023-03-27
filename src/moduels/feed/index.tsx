import React, { useState } from "react";
import FeedFooter from "./components/feed-footer";
import styles from "./feed.module.scss";
import Post from "./components/post";
import { usePost } from "./hooks/use-post";

const Feed = () => {
  const [type, setType] = useState<"home" | "favorite">("home");

  const { posts, isError, isLoading, handleFavorite } = usePost(type);

  return (
    <div className={styles.container}>
      {posts.map((post: any, key) => (
        <Post key={key} post={post} onClickFavorite={handleFavorite} />
      ))}

      <FeedFooter onChange={setType} />
    </div>
  );
};

export default Feed;
