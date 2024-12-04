import React from 'react';
import './RecentPosts.css';

interface Post {
  title: string;
  category: string;
  image: string;
}

const RecentPosts: React.FC = () => {
  const posts: Post[] = [
    {
      title: 'Consectetuer vehicula ab',
      category: 'In Kitchen, Lifestyle',
      image: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img-150x150.jpg'
    },
    {
      title: 'Taciti hendrerit dis odit incidunt',
      category: 'In Kitchen, Living Room, Reading Room',
      image: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img-150x150.jpg',
    },
    {
      title: 'Sunt doloremque blandit inven',
      category: 'In Living Room',
      image: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic20-free-img-150x150.jpg',
    },
    {
      title: 'Fugit quaerat voluptate! Irure.',
      category: 'In Living Room',
      image: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img-150x150.jpg',
    },
    {
      title: 'Litora aptent magnam laoreet!',
      category: 'In Living Room',
      image: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/sofa-with-pot-150x150.jpg',
    },
  ];

  return (
    <div className="recent-posts-container">
      <h3 className="recent-posts-title">Recent Posts</h3>
      <ul className="recent-posts-list">
        {posts.map((post, index) => (
          <li key={index} className="recent-post-item">
            <img src={post.image} alt={post.title} className="recent-post-image" />
            <div className="recent-post-content">
              <a href="#" className="recent-post-title">{post.title}</a>
              <p className="recent-post-category">{post.category}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPosts;
