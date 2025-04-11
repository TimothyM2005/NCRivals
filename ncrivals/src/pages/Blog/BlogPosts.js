import { useParams } from 'react-router-dom';
import DashPost from './DashPost';
import "./BlogPost.css"

const posts = {
  dash: DashPost,
  // Add other posts here as you create them
};

export default function BlogPost() {
  const { postId } = useParams();
  const PostComponent = posts[postId];

  return (
    <div className="blog-post-page">
      {PostComponent ? <PostComponent /> : <p>Post not found.</p>}
    </div>
  );
}
