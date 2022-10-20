import liLogo from '../Assets/linkedInIcon.png'
import ghLogo from '../Assets/GHIcon.png'
import gmail from '../Assets/gmail.png'
import facebook from '../Assets/fbicon.png'



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  return (
    <Container fluid>
      <Row className="about-background">
        <Col md={6}>
          {/* <img src={logo} width={150} /> */}
        </Col>
        <Col md={6}>This is the sample text of my portfolio
        </Col>
      </Row>
      <Row className="text-light m2 text-center">
        <Col md={3}>
          <a href="https://www.linkedin.com/in/jordan-heidlage-b31518a4/" target="_blank" rel="noopener noreferrer"><img src={liLogo} alt="LinkedIn" width="50"></img></a>
        </Col>
        <Col md={3}>
          <a href="https://github.com/jordanheidlage" target="_blank" rel="noopener noreferrer"><img src={ghLogo} alt="Github" width="50"></img></a>
        </Col>
        <Col md={3}>
          <a href="https://www.facebook.com/jordan.heidlage" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Facebook" width="50"></img></a>
        </Col>
        <Col md={3}>
          <a href="mailto: jheidlage6@gmail.com" target="_blank" rel="noopener noreferrer"><img src={gmail} alt="Gmail" width="50"></img></a>
        </Col>
      </Row>
    </Container>
  );
}
