import React from 'react';
import { Container, Navbar, Nav, Card, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">My React App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="App">
        <Container className="mt-4">
          {/* Heading */}
          <h1 className="mb-4 text-center">Welcome to My React Application</h1>
          
          {/* Cards Section */}
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>React</Card.Title>
                  <Card.Text>
                    A JavaScript library for building user interfaces
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Vite</Card.Title>
                  <Card.Text>
                    Next generation frontend tooling for faster development.Your Vite setup is actually more modern than Create-React-App
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Bootstrap</Card.Title>
                  <Card.Text>
                    Popular CSS framework for responsive design
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;