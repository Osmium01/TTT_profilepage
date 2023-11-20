import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';


const Posts = (props) => {

  const { blogs } = props;

  return(
  <div className="posts">
    {blogs.map(post => (
      <div key={post.id} className="post">
        <div className="post-content">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          {/* Like icon always visible */}
          <div className="like-icon">
            <FontAwesomeIcon icon={faThumbsUp} />
          </div>
        </div>
        <div className="post-info">
          <p>
             <span className="th">thought </span>  by <span> 
             {post.writtenBy}</span>  </p>
          <p>
            {post.date} : {post.minRead} <span>Min</span> : {post.views} Views
          </p>
        </div>
      </div>
    ))}
  </div>
)
    };

export default Posts;