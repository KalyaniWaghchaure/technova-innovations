// src/pages/Home.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const Home = () => {
    const services = [
        {
          title: 'Web Development',
          description: 'Creating responsive, modern web applications that drive business growth.',
          icon: '💻'
        },
        {
          title: 'Cloud Solutions',
          description: 'Scalable cloud infrastructure to power your digital transformation.',
          icon: '☁️'
        },
        {
          title: 'AI/ML Services',
          description: 'Leveraging artificial intelligence to drive innovation and efficiency.',
          icon: '🤖'
        }
      ];
  return (
    <>
      {/* Hero Section with Wave */}
      <section className="hero-section position-relative overflow-hidden">
        <Container>
          <div className="row min-vh-100 align-items-center pt-5">
            <div className="col-lg-6" data-aos="fade-right">
              <h1 className="display-3 fw-bold text-white mb-4">
                Innovating Tomorrow's Technology
              </h1>
              <p className="lead text-white-50 mb-4">
                Transforming ideas into digital reality with cutting-edge solutions
              </p>
              <Button 
                variant="light" 
                size="lg" 
                className="rounded-pill px-4 py-3 fw-semibold"
              >
                Get Started
              </Button>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="hero-image-container">
                <img 
                  src="https://simply-crm.com/blog/wp-content/uploads/2023/12/Innovate-Tomorrow-A-Deep-Dive-into-Future-Technology-Trends-Simply-CRM-1024x1024.jpg" 
                  alt="Tech illustration" 
                  className="img-fluid floating-animation"
                />
              </div>
            </div>
          </div>
        </Container>

        {/* Wave SVG at bottom */}
        <div className="wave-shape">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      
      {/* Enhanced Services Section */}
      <section className="services-section py-8">
        <Container>
          <h2 className="text-center display-5 fw-bold mb-5">Our Services</h2>
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-md-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="h-100 service-card border-0 shadow-sm">
                  <Card.Body className="text-center p-4">
                    <div className="service-icon mb-4">
                      <span className="display-5">{service.icon}</span>
                    </div>
                    <Card.Title className="h4 fw-bold mb-3">{service.title}</Card.Title>
                    <Card.Text className="text-muted">{service.description}</Card.Text>
                    <Button variant="outline-primary" className="rounded-pill mt-3">
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* New Stats Section */}
      <section className="stats-section py-8 bg-light">
        <Container>
          <div className="row text-center g-4">
            <div className="col-md-4">
              <h3 className="display-4 fw-bold text-primary">100+</h3>
              <p className="text-muted mb-0">Projects Completed</p>
            </div>
            <div className="col-md-4">
              <h3 className="display-4 fw-bold text-primary">50+</h3>
              <p className="text-muted mb-0">Happy Clients</p>
            </div>
            <div className="col-md-4">
              <h3 className="display-4 fw-bold text-primary">95%</h3>
              <p className="text-muted mb-0">Client Satisfaction</p>
            </div>
          </div>
        </Container>
      </section>

      {/* New CTA Section */}
      <section className="cta-section py-8">
        <Container>
          <div className="text-center">
            <h2 className="display-6 fw-bold mb-4">Ready to Transform Your Business?</h2>
            <div className="d-flex justify-content-center gap-3">
              <Button 
                variant="primary" 
                size="lg" 
                className="rounded-pill px-4"
              >
                Contact Us
              </Button>
              <Button 
                variant="outline-primary" 
                size="lg" 
                className="rounded-pill px-4"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <style jsx>{`
    
        .hero-section {
          background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
          min-height: 100vh;
          padding-top: 80px;
        }

        .wave-shape {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }

        .wave-shape svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 150px;
        }

        .hero-image-container {
          position: relative;
          z-index: 1;
        }

        .floating-animation {
          animation: floating 3s ease-in-out infinite;
        }

        @keyframes floating {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}
        </style>
    </>
  );
};

export default Home;