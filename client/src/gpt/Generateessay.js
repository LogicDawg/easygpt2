import "./forms.css"
import image from '../assets/essay-module.png'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import UserContext from "../UserContext"
import { useState, useContext } from 'react'
import { Container } from "react-bootstrap";

const GenerateEssay = () => {
  const [essayDescription, setEssayDescription] = useState("")
  const [numWords, setNumWords] = useState("")
  const [essayCreate, setEssayCreate]= useState("")
  const [isLoading,setIsLoading] = useState(false);
  const { currentUser } = useContext(UserContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const generatedEssay = await GenerateEssay()
    setEssayCreate(generatedEssay)
  }
  
  const GenerateEssay = async () => {
    const response = await fetch("http://localhost:3005/ai_calls/generateessay",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username:currentUser.username,essayDescription: essayDescription, numWords: numWords})
    });

    const data = await response.json()
    setIsLoading(false)
    return data.response;
  }
    
  return (
 

    <Container id="main-container" className="d-grid h-100">
      <Form id="ai-form" className="text-center w-100" onSubmit={onSubmit}>
        <img src={image} alt='sqllogo' className="mb-4 form-logo"/>
        <h1 className="mb-3 fs-3">Generate Essay with AI</h1>
        <p className="module-description">Create an essay! Just type a description of what you would like, and select the number of words.</p>
          <Form.Group className='mb-3'>
              <Form.Control
                type='text'
                name='Essay-description'
                placeholder='What does this need to be about?'
                onChange={(e) => setEssayDescription(e.target.value)}
                />
            </Form.Group>
            <Form.Label>Number of Words</Form.Label>   
            <Form.Range
                className="form-range" 
                type="range"
                name="Num-of-words"
                min={25}
                max={250}
                step={5}
                onChange={(e) => setNumWords(e.target.value)}
                />
                <p>Current number of words: {numWords}</p>
            <div className="mb-4 d-grid">
              <Button variant="primary" disabled={isLoading} type='submit'>
              {isLoading ?
                <Spinner
                  as="span"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              : 'Generate Essay'}
            </Button>
          </div>
      </Form>
      <div className="container text-center">
            <h3 className="mb-5 fs-5">Response: </h3>
            
              <div className="response-text">{essayCreate}</div>
            
          </div>
          
    </Container>
    
  )
}

export default GenerateEssay;