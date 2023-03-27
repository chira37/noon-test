import React from "react";
import styles from "./post-skeleton.module.scss";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

interface PostSkeletonProps {
  isLoading: boolean;
}

const PostSkeleton = ({ isLoading }: PostSkeletonProps) => {
  if (!isLoading) return null;
  return (
    <>
      {[...Array(3)].map((_, key) => (
        <div key={key} className={styles.postContainer}>
          <div className={styles.header}>
            <Skeleton className={styles.avatar} height={50} width={50} />
            <Skeleton count={1} width={200} height={15} />
          </div>
          <Skeleton count={1} className={styles.image} />
          <Skeleton count={1} width={100} height={10} />
          <Skeleton count={4} height={10} />
        </div>
      ))}
    </>
  );
};

export default PostSkeleton;
