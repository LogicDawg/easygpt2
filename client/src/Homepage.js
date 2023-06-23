import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import sqllogo from "./assets/sql-server.png";
import ai_image from "./assets/ai_image.png";
import essay_image from "./assets/essay-module.png"
import {Container,Row,Col,Image,Button, Form} from "react-bootstrap"
import Requests from "./Requests";

const Homepage = () => {
    const { currentUser } = useContext(UserContext);
    console.debug("Homepage", "currentUser=", currentUser);

    return (
        <div className="Homepage">
        <div className="container text-center">
          <h1 className="mb-2 font-weight-bold">EasyGPT</h1>
          <p className="lead mb-5">Looking for the next easy answer! Look no further!</p>
          {currentUser
              ?
               <>
              <h2 className="mb-5">
                Welcome Back, {currentUser.username}!
              </h2>
              <Container className="modules">
                  <Row>
                    <Col className="module-container"xs={6} md={4}>
                      <Link className=""
                            to="/generatesql">
                      <Image className="module-img" src={sqllogo}/>                    
                      </Link>
                      <p className="fs-2">SQL Query Generator</p> 
                    </Col>
                    <Col className="module-container" xs={6} md={4}>
                    <Link className=""
                            to="/generateimage">
                      <Image className="module-img" src={ai_image}/>                    
                      </Link>
                      <p className="fs-2">Image Generator</p> 
                    </Col>
                    <Col className="module-container" xs={6} md={4}>
                    <Link className=""
                            to="/generateessay">
                      <Image className="module-img" src={essay_image}/>                    
                      </Link>
                      <p className="fs-2">Essay Generator</p> 
                    </Col>
                  </Row>
                </Container>
                <Container className="mt-5">
                  <h1>Previous Requests:</h1>
                  <Requests />
                </Container>

              </>
              : (
                  <>
                    <Link className=""
                          to="/login">
                      <Button variant="primary">Login</Button>
                    </Link>
                    {' '}
                    <Link className=""
                          to="/signup">
                      <Button variant="primary">Signup</Button>
                    </Link>
                  </>
              )}
        </div>
      </div>
    )
}

export default Homepage;