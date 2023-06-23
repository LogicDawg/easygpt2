import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import sqllogo from "./assets/sql-server.png"
import {Container,Row,Col,Image} from "react-bootstrap"

const Homepage = () => {
    const { currentUser } = useContext(UserContext);
    console.debug("Homepage", "currentUser=", currentUser);

    return (
        <div className="Homepage">
        <div className="container text-center">
          <h1 className="mb-2 font-weight-bold">EasyGPT</h1>
          <p className="lead">Looking for the next easy answer! Look no further!</p>
          {currentUser
              ?
               <>
              <h2>
                Welcome Back, {currentUser.username}!
              </h2>
              <Container>
                  <Row>
                    <Col xs={6} md={4}>
                      <Link className=""
                            to="/generatesql">
                      <Image src={sqllogo} rounded width={200} height={200} />                    
                      </Link>
                      <p className="fs-1">SQL Query</p> 
                    </Col>
                    <Col xs={6} md={4}>
                      <Image src="/thumbnail.png" circle />
                    </Col>
                    <Col xs={6} md={4}>
                      <Image src="/thumbnail.png" thumbnail />
                    </Col>
                  </Row>
                </Container>

              </>
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