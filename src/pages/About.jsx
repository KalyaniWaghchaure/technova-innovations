// src/pages/About.jsx
import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Mike Chen',
      role: 'CTO',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Emma Davis',
      role: 'Lead Developer',
      image: '/api/placeholder/300/300'
    }
  ];

  return (
    <Container className="py-5 mt-5">
      <div className="text-center mb-5">
        <h1>About TechNova</h1>
        <p className="lead">Driving innovation through technology</p>
      </div>
      
      <div className="row mb-5">
        <div className="col-md-6" data-aos="fade-right">
          <h2>Our Mission</h2>
          <p>To empower businesses with cutting-edge technology solutions that drive growth and innovation.</p>
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <h2>Our Vision</h2>
          <p>To be the leading technology partner for businesses worldwide, known for excellence and innovation.</p>
        </div>
      </div>

      <h2 className="text-center mb-4">Our Team</h2>
      <div className="row g-4">
        {team.map((member, index) => (
          <div className="col-md-4" key={index} data-aos="fade-up">
            <div className="card h-100 shadow-sm">
              <img src={member.image} className="card-img-top" alt={member.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default About;