import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add authentication logic here
    console.log("Logging in...");
    navigate('/dashboard');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Login</Card.Title>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <div className="d-grid gap-2">
                <Button variant="primary" type="submit">
                Login
                </Button>
            </div>
          </Form>
          <div className="mt-3 text-center">
            <small>Don't have an account? <Link to="/register">Register</Link></small>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginPage;
