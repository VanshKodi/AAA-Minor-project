import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Mortarboard } from 'react-bootstrap-icons';
import GroupExample from '../components/FeatureCardGroup';

const LandingPage = () => {
  return (
    <Container className="text-center mt-5">
      <div className="mb-4">
        <Mortarboard size={80} color="#0d6efd" />
      </div>
      <h1>Welcome to ScholarSync</h1>
      <p className="lead">Your Complete Educational Management System</p>
      <p>Streamline your academic workflow with our comprehensive platform.</p>
      <GroupExample/>
      <Link to="/login">
        <Button variant="dark" className='mt-4'>Get Started</Button>
      </Link>
    </Container>
  );
};

export default LandingPage;
