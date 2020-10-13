import React from 'react';
import { AppRoute } from './AppRoute';
import { UserContext } from "./UserContext";

const MainApp = () => {

  const user = {
    id: 123,
    name: 'Turiano Romero',
    email: 'romero.guzman18@gmail.com'
  }

  return (
    <UserContext.Provider value={user}>
      <AppRoute />
    </UserContext.Provider>
  );
};

export default MainApp;