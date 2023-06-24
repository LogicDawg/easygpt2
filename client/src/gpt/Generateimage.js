import "./forms.css"
import image from '../assets/ai_image.png'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import UserContext from "../UserContext"
import { useState,useContext } from 'react'
import { Container } from "react-bootstrap";

const GenerateImage= () => {
  const [imageDescription, setImageDescription] = useState("")
  const [imageCreate, setImageCreate]= useState("")
  const [isLoading,setIsLoading] = useState(false);
  const { currentUser } = useContext(UserContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const generatedImage = await generateImage()
    setImageCreate(generatedImage)
  }
  
  const generateImage = async () => {
    const response = await fetch("http://localhost:3005/ai_calls/generateimage",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username:currentUser.username,imageDescription: imageDescription})
    });

    const data = await response.json()
    setIsLoading(false)
    return data.response;
  }
    
  return (
 

    <Container id="main-container" className="d-grid h-100">
      <Form id="ai-form" className="text-center w-100" onSubmit={onSubmit}>
        <img src={image} alt='sqllogo' className="mb-4 form-logo"/>
        <h1 className="mb-3 fs-3">Generate Image with AI</h1>
        <p className="module-description">Enter the description of something you would like to server
        made into an image.</p>
          <Form.Group className='mb-3'>
              <Form.Control
                type='text'
                name='Image-description'
                placeholder='Describe Image'
                onChange={(e) => setImageDescription(e.target.value)}
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
              : 'Generate Image'}
            </Button>
          </div>
      </Form>
      <div className="container text-center">
            <h3 className="mb-5 fs-5">Response: </h3>
            <pre>
              <p className="response-text"><img src={imageCreate} alt="Generated Image will appear here!"/></p>
            </pre>
          </div>
          
    </Container>
    
  )
}

export default GenerateImage;