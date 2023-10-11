import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';

export const Registration = (props) => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const updateUsername = (name) => {
    setUser({ ...user, username: name });
  };

  const updatePassword = (pwd) => {
    setUser({ ...user, password: pwd });
  };

  const updatePasswordConfirm = (pwd) => {
    setUser({ ...user, passwordConfirm: pwd });
  };

  const updateEmail = (newemail) => {
    setUser({ ...user, email: newemail });
  };

  const updateEmailBlur = (newemail) => {
    if (user.username === '' && newemail.includes('@')) {
      const email_split = newemail.split('@');
      setUser({ ...user, username: email_split[0] });
    }
  };

  const btnClick = (e) => {
    console.log(user);
    e.preventDefault();
  };

  return (
    <form>
      <label>
        username
        <input
          id="username-input"
          type="text"
          value={user.username}
          onChange={(e) => updateUsername(e.target.value)}
        />
      </label>
      <label>
        email{' '}
        <input
          id="email-input"
          type="text"
          value={user.email}
          onChange={(e) => updateEmail(e.target.value)}
          onBlur={(e) => updateEmailBlur(e.target.value)}
        />
      </label>
      <label>
        password{' '}
        <input
          id="password-input"
          type="text"
          value={user.password}
          onChange={(e) => updatePassword(e.target.value)}
        />
      </label>
      <label>
        passwordConfirm{' '}
        <input
          id="passwordConfirm-input"
          type="text"
          value={user.passwordConfirm}
          onChange={(e) => updatePasswordConfirm(e.target.value)}
        />
      </label>

      <button type="submit" onClick={btnClick}>
        Odeslat
      </button>
    </form>
  );
};
