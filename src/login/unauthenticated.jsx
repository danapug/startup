import React from 'react';

import Button from 'react-bootstrap/Button';
import {MessageDialog} from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({email: userName, password: password}),
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
            <div class="input-group mb-3">
                <p>Login to start budgeting</p>
                <span class="input-group-text">😊</span>
                <input class="form-control" type="text" id="user" placeholder="username" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">🔒</span>
                <input class="form-control" type="password" id="pass" placeholder="password" />
            </div>
            <button type="button" class="btn btn-primary" onclick="loginUser()">Login</button>
            <button type="button" class="btn btn-primary" onclick="createUser()">Create</button>
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
