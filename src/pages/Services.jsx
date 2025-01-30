// src/pages/Services.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import {Button } from 'react-bootstrap';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Creating responsive, user-centric websites and web applications using cutting-edge technologies. From elegant front-end designs to robust back-end solutions, we deliver seamless digital experiences.',
      icon: '🌐'
    },
    {
      title: 'Cloud Solutions',
      description: 'Providing scalable cloud infrastructure and migration services to optimize your business operations. Expert implementation of AWS, Azure, and Google Cloud platforms with focus on security and efficiency.',
      icon: '☁️'
    },
    {
      title: 'AI/ML Services',
      description: 'Leveraging artificial intelligence and machine learning to transform your data into actionable insights. Custom solutions for predictive analytics, natural language processing, and automated decision-making systems.',
      icon: '🤖'
    }
  ];

  return (
    <Container className="py-5 mt-5">
      <h1 className="text-center mb-5">Our Services</h1>
      <div className="row g-4">
        {services.map((service, index) => (
          <div className="col-md-4" key={index} data-aos="fade-up">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div className="display-4 mb-3">{service.icon}</div>
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                
              </div>
              <Button 
                variant="light" 
                size="lg" 
                className="rounded-pill px-1 py-1 fw-semibold"
              >
                Explore
              </Button>
            </div>

          </div>
        ))}
        
      </div>

    </Container>
  );
};

export default Services;