import { useQuery } from "@tanstack/react-query";
import { fetchPosts, fetchComments } from "../api/api";

const TrendingPosts = () => {
  const { data: posts, isLoading: postsLoading } = useQuery(["posts"], fetchPosts);
  const { data: comments, isLoading: commentsLoading } = useQuery(["comments"], fetchComments);

  if (postsLoading || commentsLoading) return <p>Loading...</p>;

  const postCommentCount = posts.map(post => ({
    ...post,
    commentCount: comments.filter(comment => comment.postId === post.id).length,
  })).sort((a, b) => b.commentCount - a.commentCount).filter(post => post.commentCount > 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Trending Posts</h2>
      {postCommentCount.map(post => (
        <div key={post.id} className="bg-gray-100 p-4 mb-2 rounded">
          <p className="font-bold">{post.title}</p>
          <p>Comments: {post.commentCount}</p>
        </div>
      ))}
    </div>
  );
};

export default TrendingPosts;
