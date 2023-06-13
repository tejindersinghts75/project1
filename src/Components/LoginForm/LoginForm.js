import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';


function LoginForm() {
  const[email,setEmail]= useState  ('')
  const[error, setError]= useState('')
  const[password, setPassword]= useState('')
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    let emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if(!email || !password)
   {
    setError('All fields are required')
   }
   
   else if(!emailRegex.test(email))
   {
    setError('Please enter valid email')
   }
   else if(password.length < 6)
   {
    setError('Please enter more char')
   }
   else{
    setEmail('')
    setPassword('')
    setError('')
    setError('You are logged in')
    
   }
   
  }

  return (
    <div>
      {error && <p>{error}</p>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" >
            Log In
          </Button>
        </Form>
      </div>
   
  )
}
export default LoginForm