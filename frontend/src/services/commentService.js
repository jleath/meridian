import axios from 'axios';

const COMMENT_DB_URL = 
  process.env.NODE_ENV === 'development' ? 'http://localhost:3003/comments' : 'https://messier.api.joshleath.com/comments';

const addComment = async (dsoId, messier_no, dsoName, comment) => {
  dsoName = messier_no + (dsoName ? ` - ${dsoName}` : '');
  const response = await axios.post(COMMENT_DB_URL, { dsoId, dsoName, comment });
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