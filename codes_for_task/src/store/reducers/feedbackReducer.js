import { createSlice } from '@reduxjs/toolkit';

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState: {
    feedback: [],
  },
  reducers: {
    submitFeedback: (state, action) => {
      state.feedback.push(action.payload);
    },
  },
});

export const { submitFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
