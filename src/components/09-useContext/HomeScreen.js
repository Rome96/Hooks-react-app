import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const HomeScreen = () => {
  const data = useContext(UserContext)
  const { user } = data
  return (
    <div>
      <h1>Home Screen</h1>
      <hr/>
      <pre className='container'>
        { JSON.stringify(user, null, 3) }
      </pre>
    </div>
  );
};

export default HomeScreen;