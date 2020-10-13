import React, { useState } from 'react';
import { AppRoute } from './AppRoute';
import { UserContext } from "./UserContext";

const MainApp = () => {

  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRoute />
    </UserContext.Provider>
  );
};

export default MainApp;