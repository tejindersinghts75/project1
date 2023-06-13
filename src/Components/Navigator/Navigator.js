import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigator() {
  return (
    <Navbar className="navgtor" expand="lg" varient="light">
      <Container >

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown className='text-white' title="All Categories" id="basic-nav-dropdown">
              <NavDropdown.Item c href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>  
            <Nav.Link className='text-white mx-3' href="#home">HomePage</Nav.Link>
            <Nav.Link className='text-white mx-3' href="#link">Shop</Nav.Link>
            <Nav.Link className='text-white mx-3' href="#home">About</Nav.Link>
            <Nav.Link className='text-white mx-3' href="#link">Blog</Nav.Link>
            
          </Nav>
          <div>
            <button className='slr-btn'>Become a Seller</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigator;