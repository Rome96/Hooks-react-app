import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const HomeScreen = () => {
  const { user: {name, email} } = useContext(UserContext);
  
  return (
    <div>
      <h1>Home Screen</h1>
      <hr/>
      <pre className='container'>
        {/* { JSON.stringify(user, null, 3) } */}
        <h3>{name}</h3>
        <h3>{email}</h3>
      </pre>
    </div>
  );
};

export default HomeScreen;