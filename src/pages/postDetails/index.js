import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentByPostId } from '../../store/reducer/posts';
import { useEffect } from 'react';

const PostDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { postId } = params;
  const store = useSelector((store) => store);
  const commentList = useSelector((store) => store.posts.comment);

  useEffect(() => {
    dispatch(fetchCommentByPostId(postId));
  }, []);

  return (
    <div>
      <h1>POST DETAILS</h1>
      {commentList.map((post) => {
        return (
          <button style={{ width: '100%' }} key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </button>
        );
      })}
    </div>
  );
};

export default PostDetails;
