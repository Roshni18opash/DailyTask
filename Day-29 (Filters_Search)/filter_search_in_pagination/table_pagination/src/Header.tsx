// import BT Components';

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

interface HeaderProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
const Header = ({ setSearch }: HeaderProps) => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="https://www.nykaa.com/">Nykaa</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="https://www.nykaa.com/">Cosmetics</Nav.Link>
              <Nav.Link
                href="https://www.nykaa.com/hair-care/hair/hair-creams-masks/c/2041?search_redirection=True"
                id="navbarScrollingDropdown"
              >
                Hair Care
              </Nav.Link>
              <Nav.Link href="https://www.nykaa.com/skin-flash-deals/c/14496?transaction_id=b3e6eba9f82a23e5cd5574eafe9a0cd8&intcmp=nykaa:sp:skin-sale-page:skincare-sale:L3-Widgets:SLIDING_WIDGET_V2:2:Winter%20Glow:-1:b3e6eba9f82a23e5cd5574eafe9a0cd8">
                Skin Care
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                //run every time user type
                onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
