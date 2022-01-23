import React, { useState, useEffect } from 'react';
import commentService from '../services/commentService';

const DSO = ({ dso }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      const comments = await commentService.getComments(dso.id);
      setComments(comments);
    }
    fetchComments();
  }, [dso.id])

  const handleFormSubmit = async event => {
    event.preventDefault();
    const newComment = await commentService.addComment(dso.id, commentText);
    setComments(comments.concat(newComment));
    setCommentText('');
  };

  const handleCommentChange = event => {
    setCommentText(event.target.value);
  };

  return (
    <div>
      <h2>{dso.id} - {dso.name}</h2>
      <ul>
        {
          comments.map(comment => <li key={comment._id}>{comment.comment}</li>)
        }
      </ul>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={commentText} onChange={handleCommentChange}/>
        <br/>
        <button id="blog-create-button" type="submit">create</button>
      </form>
    </div>
  );
};

export default DSO;