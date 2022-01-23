import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://159.223.170.76/dsos';
const COMMENT_DB_URL = 'http://159.223.170.76/comments';

const DSO = ({ dso }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    axios
      .get(`${COMMENT_DB_URL}/${dso.id}`)
      .then(response => {
        setComments(response.data);
      });
  }, [dso.id]);

  const handleFormSubmit = async event => {
    event.preventDefault();
    const comment = commentText;
    await axios.post(COMMENT_DB_URL, { dsoId: dso.id, comment: commentText });
    setComments(comments.concat(comment));
    setCommentText('');
  };

  const handleCommentChange = event => {
    setCommentText(event.target.value);
  };

  return (
    <div>
      <h1>{dso.id} - {dso.name}</h1>
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

const App = () => {
  const [dsos, setDsos] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then(response => {
        setDsos(response.data);
      });
  }, []);

  return (
    <>
      {dsos.map(dso => <DSO dso={dso}/>)}
    </>
  );
}

export default App;
