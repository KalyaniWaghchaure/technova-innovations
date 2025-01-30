// src/components/layout/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
  const socialLinks = [
    { icon: <FaLinkedin />, url: '#', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter' },
    { icon: <FaFacebook />, url: '#', label: 'Facebook' },
    { icon: <FaInstagram />, url: '#', label: 'Instagram' },
    { icon: <FaGithub />, url: '#', label: 'Github' }
  ];

  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row className="gy-4">
          <Col lg={4}>
            <h3 className="text-primary fw-bold mb-4">TechNova</h3>
            <p className="text-light-emphasis mb-4">
              Empowering businesses with cutting-edge technology solutions for a digital future.
            </p>
          </Col>
          
          <Col lg={4}>
            <h5 className="text-white mb-4">Contact Information</h5>
            <div className="d-flex align-items-center mb-3">
              <HiLocationMarker className="text-primary me-2 fs-5" />
              <p className="mb-0">123 Tech Street, Silicon Valley, CA 94025</p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <HiMail className="text-primary me-2 fs-5" />
              <p className="mb-0">info@technova.com</p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <HiPhone className="text-primary me-2 fs-5" />
              <p className="mb-0">(123) 456-7890</p>
            </div>
          </Col>
          
          <Col lg={4}>
            <h5 className="text-white mb-4">Connect With Us</h5>
            <div className="d-flex gap-3 fs-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-light-emphasis hover-lift"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Col>
        </Row>

        <hr className="my-4 border-secondary" />
        
        <Row>
          <Col className="text-center text-light-emphasis">
            <p className="mb-0">&copy; {new Date().getFullYear()} TechNova. All rights reserved.</p>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .hover-lift {
          transition: transform 0.2s ease, color 0.2s ease;
        }
        .hover-lift:hover {
          transform: translateY(-3px);
          color: var(--bs-primary) !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;