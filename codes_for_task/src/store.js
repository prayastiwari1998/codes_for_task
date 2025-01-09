import { configureStore } from '@reduxjs/toolkit';
import postReducer from './store/reducers/postReducer';
import feedbackReducer from './store/reducers/feedbackReducer';

const store = configureStore({
  reducer: {
    posts: postReducer,
    feedback: feedbackReducer,
  },
});

export default store;
