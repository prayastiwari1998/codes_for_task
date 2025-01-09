import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
});

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    currentPage: 1,
    viewToggle: false,
    loading: true,
  },
  reducers: {
    removePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    toggleView: (state) => {
      state.viewToggle = !state.viewToggle;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      });
  },
});

export const { removePost, toggleView } = postSlice.actions;
export default postSlice.reducer;
