import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/reducer/auth';
import { useNavigate } from 'react-router-dom';

import './styles.css';

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const auth = useSelector((store) => store.auth);

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    const params = {
      email,
      password,
    };
    dispatch(login(params));
  };

  useEffect(() => {
    if (auth.error) {
      alert(auth.error);
    }
  }, [auth.error]);

  useEffect(() => {
    if (auth.token) {
      navigate('/');
    }
  }, [auth.token]);

  // Generate JSX code for error message
  const renderErrorMessage = (name) => name === errorMessages.name && <div className='error'>{errorMessages.message}</div>;

  // JSX code for login form
  const renderForm = (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label>Email </label>
          <input
            type='text'
            name='uname'
            onChange={(data) => {
              setEmail(data.target.value);
            }}
            value={email}
          />
          {renderErrorMessage('uname')}
        </div>
        <div className='input-container'>
          <label>Password </label>
          <input
            type='password'
            name='pass'
            onChange={(data) => {
              setPassword(data.target.value);
            }}
            value={password}
          />
          {renderErrorMessage('pass')}
        </div>
        <div className='button-container'>
          <input type='submit' />
        </div>
      </form>
    </div>
  );

  return (
    <div className='app'>
      <div className='login-form'>
        <div className='title'>Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;
