import React from 'react';
import { useContext } from 'react';
import { UserContext } from './UserContext';

const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  const handleSetUser = () => {
    const user = {
      id: 1,
      name: 'Turiano',
      email: 'turiano@turiano.com'
    };

    setUser(user)
  };

  return (
    <div>
      <h1>Login Screen</h1>
      <hr />
      <button
        onClick={handleSetUser}
        className='btn btn-primary'
      >
        loging
      </button>
    </div>
  );
};

export default LoginScreen;