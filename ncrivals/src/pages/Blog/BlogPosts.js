import { useParams } from 'react-router-dom';
import DashPost from './DashPost';
import ZenohPost from './ZenohPost';

const posts = {
  dash: DashPost,
  zenoh: ZenohPost,
  // Add other posts here as you create them
};

export default function BlogPost() {
  const { postId } = useParams();
  const PostComponent = posts[postId];

  // Debug logging
  console.log('BlogPost component - postId:', postId);
  console.log('BlogPost component - Available posts:', Object.keys(posts));
  console.log('BlogPost component - PostComponent found:', !!PostComponent);

  return (
    <div className="blog-post-page">
      {PostComponent ? <PostComponent /> : (
        <div style={{ padding: '2rem', textAlign: 'center', color: 'white' }}>
          <h2>Post not found</h2>
          <p>Looking for post ID: "{postId}"</p>
          <p>Available posts: {Object.keys(posts).join(', ')}</p>
        </div>
      )}
    </div>
  );
}
