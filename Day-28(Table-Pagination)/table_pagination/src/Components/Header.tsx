
// import Container from 'react-bootstrap/Container';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Pure Bloom</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Products list" id="basic-nav-dropdown">
              <NavDropdown.Item href="#1">Cosmetics</NavDropdown.Item>
              <NavDropdown.Item href="#">
               Product 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Product 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Product 3
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Header