import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Login from '../pages/login';
import UserList from '../pages/userList';
import PostDetails from '../pages/postDetails';

const configRoute = [
  { path: '/', component: App },
  { path: 'login', component: Login },
  { path: 'user-list', component: UserList },
  { path: 'post-details/:postId', component: PostDetails },
];

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {configRoute.map((route, idx) => {
          const Component = route.component;
          return <Route key={`route-${route.path}-${idx}`} path={route.path} element={<Component />} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
