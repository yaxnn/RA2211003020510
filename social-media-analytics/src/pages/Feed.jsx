import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/api";
import { useEffect, useState } from "react";

const Feed = () => {
  const { data: initialPosts, isLoading } = useQuery(["posts"], fetchPosts);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (initialPosts) {
      setPosts(initialPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    }

    const interval = setInterval(async () => {
      const newPosts = await fetchPosts();
      setPosts(newPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    }, 5000);

    return () => clearInterval(interval);
  }, [initialPosts]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Live Feed</h2>
      {posts.map(post => (
        <div key={post.id} className="bg-gray-100 p-4 mb-2 rounded">
          <p className="font-bold">{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
