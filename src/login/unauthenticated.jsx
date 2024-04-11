import React from 'react';
import Button from 'react-bootstrap/Button';
import {MessageDialog} from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

const handlePasswordChange = (e) => {
    setPassword(e.target.value);
};

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({userName: userName, password: password}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

  return (
    <>
        <div id="loginControls">
            <div className="input-group mb-3">
                <div>
                <p>Login to start budgeting</p>
                </div>
                <span className="input-group-text">😊</span>
                <input className="form-control" type="text" id="user" placeholder="username" value={userName} onChange={handleUserNameChange} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">🔒</span>
                <input className="form-control" type="password" id="pass" placeholder="password" value={password} onChange={handlePasswordChange} />
            </div>
            <Button variant='primary' onClick={() => loginUser()}>
            Login
            </Button>
            <Button variant='secondary' onClick={() => createUser()}>
            Create
            </Button>
        </div>

      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}
