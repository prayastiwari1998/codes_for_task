import * as actionTypes from './actionTypes';

export const fetchPosts = () => {
  return async (dispatch) => {
    setTimeout(async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      dispatch({ type: actionTypes.FETCH_POSTS, payload: data });
    }, 5000); // Simulate loading delay
  };
};

export const removePost = (id) => ({
  type: actionTypes.REMOVE_POST,
  payload: id,
});

export const toggleView = () => ({
  type: actionTypes.TOGGLE_VIEW,
});
