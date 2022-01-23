import axios from 'axios';

const COMMENT_DB_URL = 'http://159.223.170.76/comments';

const addComment = async (dsoId, comment) => {
  const response = await axios.post(COMMENT_DB_URL, { dsoId, comment });
  return response.data;
}