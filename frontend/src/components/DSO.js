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
    if (commentText.trim() !== '') {
      const newComment = await commentService.addComment(dso.id, commentText);
      setComments(comments.concat(newComment));
      setCommentText('');
    }
  };

  const handleCommentChange = event => {
    setCommentText(event.target.value);
  };

  return (
    <div className="dso-card">
      <h2>{dso.messier_no} {dso.name !== '' ? `- ${dso.name}` : ''}</h2>
      <img alt={dso.messier_no} src={`https://www.messier.seds.org/Jpg/m${dso.messier_no.slice(1)}.jpg`}/>
      <div className="dso-info">
        <p>{dso.type}</p>
        <p>{dso.constellation}</p>
        <form onSubmit={handleFormSubmit}>
          <input type="text" value={commentText} onChange={handleCommentChange}/>
          <br/>
          <button id="blog-create-button" type="submit">Add Comment</button>
        </form>
        <ul>
          {comments.map(comment => <li key={comment._id}>{comment.comment}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default DSO;