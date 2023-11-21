// pages/index.js
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Next.js Multi-User Authentication</h1>
      <Link href="/login/login">Login</Link>
    </div>
  );
};

export default Home;
