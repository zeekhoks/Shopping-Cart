import Container from 'react-bootstrap/Container';
import Cart from '../../models/Cart';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { Button } from 'react-bootstrap';

function NavBar({quantityFromProduct}:{quantityFromProduct: number}) {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" style={{ marginBottom: "20px" }} sticky="top">
      <Container>
        <Navbar.Brand>Shopping Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button variant="link" style={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none' }}>
              <i className="bi bi-cart-fill" style={{ fontSize: '1.5rem', color: 'white' }}></i>
              <p style={{ margin: '0 0 0 10px', color: 'white' }}>{quantityFromProduct}</p>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;