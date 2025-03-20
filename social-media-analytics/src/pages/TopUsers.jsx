import { useQuery } from "@tanstack/react-query";
import { fetchUsers, fetchPosts } from "../api/api";

const TopUsers = () => {
  const { data: users, isLoading: usersLoading } = useQuery(["users"], fetchUsers);
  const { data: posts, isLoading: postsLoading } = useQuery(["posts"], fetchPosts);

  if (usersLoading || postsLoading) return <p>Loading...</p>;

  const userPostCount = users.map(user => ({
    ...user,
    postCount: posts.filter(post => post.userId === user.id).length,
  })).sort((a, b) => b.postCount - a.postCount).slice(0, 5);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Top 5 Users</h2>
      {userPostCount.map(user => (
        <div key={user.id} className="bg-gray-100 p-4 mb-2 rounded">
          <p className="font-bold">{user.name}</p>
          <p>Posts: {user.postCount}</p>
        </div>
      ))}
    </div>
  );
};

export default TopUsers;
