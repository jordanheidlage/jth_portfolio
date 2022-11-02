import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='text-white'>Jordan Thomas Heidlage</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-white'/>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end '>
          <Nav >
            <Nav.Link
              href="#home"
              onClick={() => handlePageChange('Home')}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === 'Home' ? 'nav-link active text-white fw-bold' : 'nav-link text-white'}
            >Home</Nav.Link>
            <Nav.Link
              href="#about"
              onClick={() => handlePageChange('About')}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'About' ? 'nav-link active text-white fw-bold' : 'nav-link text-white'}
            >About</Nav.Link>
            <Nav.Link
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Portfolio' ? 'nav-link active text-white fw-bold' : 'nav-link text-white'}
            >Portfolio</Nav.Link>
            <Nav.Link
              href={process.env.PUBLIC_URL + "/jheidlageResume.pdf"}
              download
              // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Resume' ? 'nav-link active text-white fw-bold' : 'nav-link text-white'}
            >Resume</Nav.Link>
            {/* <Nav.Link
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Contact' ? 'nav-link active text-white fw-bold ' : 'nav-link text-white'}
            >Contact</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
