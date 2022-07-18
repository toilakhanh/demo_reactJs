import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { TOKEN } from './utils/const';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, saveToken } from './store/reducer/auth';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((store) => store.auth.token);
  const store = useSelector((store) => store);
  console.log(store);
  const authButton = () => {
    if (!token) {
      navigate('login');
    } else {
      dispatch(logout());
    }
  };

  useEffect(() => {
    const tokenStorage = localStorage.getItem(TOKEN);
    dispatch(saveToken(tokenStorage));
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <button onClick={authButton} style={{ padding: 10, margin: 10 }}>
          {!!token ? 'Logout' : 'Login'}
        </button>
        <button onClick={() => navigate('user-list')} style={{ padding: 10, margin: 10 }}>
          Go To User List
        </button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
