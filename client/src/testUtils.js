import React from "react";
import UserContext from "./auth/UserContext";

const demoUser = {
  username: "testuser",

};

const UserProvider =
    ({ children, currentUser = demoUser, hasAppliedToJob = () => false }) => (
    <UserContext.Provider value={{ currentUser, hasAppliedToJob }}>
      {children}
    </UserContext.Provider>
);

export { UserProvider };