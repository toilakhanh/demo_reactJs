import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducer/users';
import postsReducer from './reducer/posts';
import authReducer from './reducer/auth';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    auth: authReducer,
  },
});
