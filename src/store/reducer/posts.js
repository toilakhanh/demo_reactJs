import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  list: [],
  comment: [],
};

export const fetchPostList = createAsyncThunk('posts/fetchPostList', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});

export const fetchCommentByPostId = createAsyncThunk('posts/fetchCommentByPostId', async (postId) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  return response.data;
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPostList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(fetchPostList.pending, (state, action) => {
      // state.list = action.payload;
    });
    builder.addCase(fetchPostList.rejected, (state, action) => {
      // state.list = action.payload;
    });
    builder.addCase(fetchCommentByPostId.fulfilled, (state, action) => {
      state.comment = action.payload;
    });
    builder.addCase(fetchCommentByPostId.pending, (state, action) => {
      // state.list = action.payload;
    });
    builder.addCase(fetchCommentByPostId.rejected, (state, action) => {
      // state.list = action.payload;
    });
  },
});

export const { increment, decrement, incrementByAmount } = postsSlice.actions;

export default postsSlice.reducer;
