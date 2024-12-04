import React from 'react';
import './Tags.css';

const Tags: React.FC = () => {
  const tags: string[] = [
    'appliances',
    'architecture',
    'area',
    'bed',
    'bedroom',
    'chair',
    'chairs',
    'corners',
    'decor',
    'design',
    'exhaust',
    'fire place',
    'frames',
    'furniture',
    'garden',
    'home',
    'interior',
    'kitchen',
    'lifestyle',
    'lights',
    'living room',
    'modern',
    'outdoor',
    'plants',
    'Shopping',
    'sitout',
    'table',
    'table top',
    'wall',
  ];

  return (
    <div className="tags-container">
      <h3 className="tags-title">Tags</h3>
      <div className="tags-list">
        {tags.map((tag, index) => (
          <button
            key={index}
            className={`tag-item ${index === 0 ? 'active-tag' : ''}`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tags;
