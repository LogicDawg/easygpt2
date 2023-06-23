import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

const Homepage = () => {
    const { currentUser } = useContext(UserContext);
    console.debug("Homepage", "currentUser=", currentUser);

    return (
        <div className="Homepage">
        <div className="container text-center">
          <h1 className="mb-2 font-weight-bold">EasyGPT</h1>
          <p className="lead">Looking for the next easy answer! Look no further!</p>
          {currentUser
              ? <h2>
                Welcome Back, {currentUser.firstName || currentUser.username}!
              </h2>
              : (
                  <p>
                    <Link className="btn btn-primary font-weight-bold mr-1"
                          to="/login">
                      Log in
                    </Link>
                    
                    <Link className="btn btn-primary font-weight-bold "
                          to="/signup">
                      Sign up
                    </Link>
                  </p>
              )}
        </div>
      </div>
    )
}

export default Homepage;