
// src/pages/Contact.jsx
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="py-5 mt-5">
      <h1 className="text-center mb-5">Contact Us</h1>
      <div className="row">
        <div className="col-md-6" data-aos="fade-right">
          <Form className="card shadow-sm p-4">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} required />
            </Form.Group>
            <Button variant="primary" type="submit">Send Message</Button>
          </Form>
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <div className="card shadow-sm p-4 h-100">
            <h4>Our Location</h4>
            <p>123 Tech Street<br />Silicon Valley, CA 94025</p>
            <div className="ratio ratio-16x9">
              <img src="/api/placeholder/600/450" alt="Map location" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
