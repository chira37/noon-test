import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";
import { Post } from "../types";

export const usePost = (type: "home" | "favorite") => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getPosts = async () => {
    setIsLoading(true);
    try {
      const response = await apiClient.get(`/posts?type=${type}`);
      setPosts(response.data);
    } catch (error: any) {
      setIsError(true);
    }
    setIsLoading(true);
  };

  const handleFavorite = async (id: string, favorite: boolean) => {
    try {
      if (favorite) {
        setPosts(posts.map((post) => ({ ...post, favorite: post.id === id })));
      } else if (type === "home") {
        setPosts(posts.map((post) => ({ ...post, favorite: post.id === id && false })));
      } else {
        setPosts(posts.filter((post) => post.id !== id));
      }

      const response = await apiClient.put(`/posts/${id}?favorite=${favorite}`);
    } catch (error: any) {
      console.log("Failed to add favorite ");
    }
  };

  useEffect(() => {
    getPosts();
  }, [type]);

  return {
    isLoading,
    isError,
    posts,
    handleFavorite,
  };
};
