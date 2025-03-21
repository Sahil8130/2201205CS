import React, { useState } from "react";

interface PostData {
  id: number;
  text: string;
  likes: number;
  comments: number;
}

const Analytics: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([
    { id: 1, text: "Hello World!", likes: 150, comments: 20 },
    { id: 2, text: "React is awesome!", likes: 200, comments: 35 },
  ]);

  return (
    <div>
      <h2>📊 Social Media Analytics</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.text}</p>
          <p>❤️ Likes: {post.likes}</p>
          <p>💬 Comments: {post.comments}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Analytics;
