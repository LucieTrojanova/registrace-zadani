import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';

const user = {
  username: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

const usernameField = () => {
  const [username, setUsername] = useState('');
};

export const Registration = (props) => {
  return (
    <form>
      <label>
        username{' '}
        <input
          id="username-input"
          type="text"
          value={user.username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        email <input id="email-input" type="text" />
      </label>
      <label>
        password <input id="password-input" type="text" />
      </label>
      <label>
        passwordConfirm <input id="passwordConfirm-input" type="text" />
      </label>

      <button type="submit">Odeslat</button>
    </form>
  );
};
