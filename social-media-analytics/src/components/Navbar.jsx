import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-center space-x-6">
      <Link to="/top-users">Top Users</Link>
      <Link to="/trending-posts">Trending Posts</Link>
      <Link to="/feed">Feed</Link>
    </nav>
  );
};

export default Navbar;
