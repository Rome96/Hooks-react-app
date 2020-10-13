import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const HomeScreen = () => {
  const userData = useContext(UserContext)
  const { name } = userData

  return (
    <div>
      <h1>Home Screen</h1>
      <hr/>
      <h3>{`Hello my name is: ${name}`}</h3>
    </div>
  );
};

export default HomeScreen;