import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Sun, Moon } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`navbar-transition ${isScrolled ? 'scrolled' : ''} ${isDarkMode ? 'dark' : ''}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="py-2">
          <span className="brand-text">TechNova</span>
        </Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {[
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Services' },
              { path: '/about', label: 'About' },
              { path: '/contact', label: 'Contact' }
            ].map((item) => (
              <Nav.Link 
                key={item.path}
                as={Link} 
                to={item.path}
                className={`nav-link-custom mx-2 ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn me-3"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
        </div>
        
      </Container>

      <style jsx>{`
        .navbar-transition {
          transition: all 0.3s ease;
          padding: 1rem 0;
          background: white;
        }

        .navbar-transition.dark {
          background: #1a1a1a;
        }

        .navbar-transition.scrolled {
          padding: 0.5rem 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .navbar-transition.dark.scrolled {
          background: rgba(26, 26, 26, 0.98);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .brand-text {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: all 0.3s ease;
        }

        .nav-link-custom {
          position: relative;
          font-weight: 500;
          color: #1a1a1a !important;
          padding: 0.5rem 1rem !important;
          transition: all 0.3s ease;
        }

        .dark .nav-link-custom {
          color: #ffffff !important;
        }

        .nav-link-custom::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link-custom:hover::after,
        .nav-link-custom.active::after {
          width: 80%;
        }

        .nav-link-custom:hover {
          transform: translateY(-2px);
          color: #0d6efd !important;
        }

        .nav-link-custom.active {
          color: #0d6efd !important;
        }

        .theme-toggle-btn {
          background: none;
          border: none;
          padding: 0.5rem;
          cursor: pointer;
          color: #1a1a1a;
          transition: all 0.3s ease;
        }

        .dark .theme-toggle-btn {
          color: #ffffff;
        }

        .theme-toggle-btn:hover {
          transform: rotate(15deg);
        }

        .navbar-toggler {
          border: none;
          padding: 0.5rem;
        }

        .navbar-toggler:focus {
          box-shadow: none;
        }

        @media (max-width: 991.98px) {
          .navbar-transition {
            background: white;
          }

          .navbar-transition.dark {
            background: #1a1a1a;
          }
          
          .nav-link-custom {
            padding: 0.75rem 1rem !important;
          }

          .nav-link-custom::after {
            display: none;
          }
        }

        /* Add these styles to your global CSS */
        :global(body.dark-mode) {
          background-color: #121212;
          color: #ffffff;
        }
      `}</style>
    </Navbar>
  );
};

export default Navigation;