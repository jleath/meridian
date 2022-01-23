import axios from 'axios';

const COMMENT_DB_URL = 'http://localhost:3002/comments';
// const COMMENT_DB_URL = 
//   process.env.NODE_ENV === 'dev' ? 'http://localhost:3002/comments' : 'http://159.223.170.76/comments';

const addComment = async (dsoId, comment) => {
  const response = await axios.post(COMMENT_DB_URL, { dsoId, comment });
  return response.data;
};

const getComments = async dsoId => {
  const response = await axios.get(`${COMMENT_DB_URL}/${dsoId}`);
  return response.data;
};

const commentService = {
  addComment,
  getComments,
}

export default commentService;