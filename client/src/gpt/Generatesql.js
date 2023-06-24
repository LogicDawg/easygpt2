import "./forms.css"
import sqllogo from '../assets/sql-logo.png'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import UserContext from "../UserContext"
import { useState, useContext } from 'react'
import { Container } from "react-bootstrap";

const GenerateSQL= () => {
  const [queryDescription, setQueryDescription] = useState("")
  const [sqlQuery, setSqlQuery]= useState("")
  const [isLoading,setIsLoading] = useState(false);
  const { currentUser } = useContext(UserContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const generatedQuery = await generateQuery()
    setSqlQuery(generatedQuery)
  }
  
  const generateQuery = async () => {
    const response = await fetch("https://easygpt-backend.onrender.com/ai_calls/generatesql",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username:currentUser.username,queryDescription: queryDescription})
    });

    const data = await response.json()
    setIsLoading(false)
    return data.response.trim();
  }
    
  return (
 

    <Container id="main-container" className="d-grid h-100">
      <Form id="ai-form" className="text-center w-100" onSubmit={onSubmit}>
        <img src={sqllogo} alt='sqllogo' className="mb-4 form-logo"/>
        <h1 className="mb-3 fs-3">Generate SQL with AI</h1>
        <p className="module-description">Enter in your SQL prompt below, for example select all users from table users would
          give you SELECT * FROM users;
        </p>
          <Form.Group className='mb-3'>
              <Form.Control
                type='text'
                name='query-description'
                placeholder='Describe Query'
                onChange={(e) => setQueryDescription(e.target.value)}
                />
            </Form.Group>
            <div className="mb-4 d-grid">
              <Button variant="primary" disabled={isLoading} type='submit'>
              {isLoading ?
                <Spinner
                  as="span"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              : 'Generate Query'}
            </Button>
          </div>
      </Form>
      <div className="container text-center">
            <h3 className="mb-3 fs-5">Response: </h3>
            <pre>
              <p className="response-text"><code>{sqlQuery}</code></p>
            </pre>
          </div>
          {/* <pre>{sqlQuery}</pre> */}
    </Container>
    
  )
}

export default GenerateSQL;