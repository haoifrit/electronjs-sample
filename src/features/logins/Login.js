import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  loginAsync,
  logoutAsync,
  lock,
  unlock,
  changeUsername,
  selectUsername,
  selectStatus,
} from './loginSlice';

export function Login() {
  const username = useSelector(selectUsername);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  const [inputUser, setInputUser] = useState('');

  return(
    <div>
      <div>
        <p>username: {username}</p>
        <p>status: {status}</p>
      </div>
      <div>
        <input
          aria-label="Set increment amount"
          value={inputUser}
          onChange={(e) => setInputUser(e.target.value)}
        />
        <button
          onClick={() => dispatch(loginAsync(inputUser))}
        >
          ログイン
        </button>
        <button
          onClick={() => dispatch(logoutAsync())}
        >
          ログアウト
        </button>
        <button
          onClick={() => dispatch(lock())}
        >
          施錠
        </button>
        <button
          onClick={() => dispatch(unlock())}
        >
          解錠
        </button>
        <button
          onClick={() => dispatch(changeUsername(inputUser))}
        >
          ユーザー名の変更
        </button>
      </div>
    </div>
  );
};