import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostList } from '../../store/reducer/posts';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postList = useSelector((store) => store.posts.list);
  const store = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchPostList());
  }, []);

  return (
    <div style={{ padding: 10 }}>
      {postList.map((post) => {
        return (
          <button onClick={() => navigate(`/post-details/${post.id}`)} style={{ width: '100%' }} key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </button>
        );
      })}
    </div>
  );
};

export default UserList;
