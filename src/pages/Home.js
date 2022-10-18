import logo from '../Assets/jth.jpeg'
import liLogo from '../Assets/linkedin.png'
import ghLogo from '../Assets/githubLogo.png'
import fbLogo from '../Assets/facebookLogo.png'
import gmLogo from '../Assets/gmailLogo.webp'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Home() {
  return (
    <Container fluid>
      <Row className="text-light m-2">
        <Col md={6}>
          <img src={logo} width={150} />
        </Col>
        <Col md={6}>This is the sample text of my portfolio
        </Col>
      </Row>
      <Row className="text-light m2">
        <Col md={3}>
          <a href="https://www.linkedin.com/in/jordan-heidlage-b31518a4/" target="_blank" rel="noopener noreferrer"><img src={liLogo} width="100"></img></a></Col>
        <Col md={3}>        <a href="https://github.com/jordanheidlage" target="_blank" rel="noopener noreferrer"><img src={ghLogo} width="100"></img></a></Col>
        <Col md={3}>        <a href="https://www.facebook.com/jordan.heidlage" target="_blank" rel="noopener noreferrer"><img src={fbLogo} width="50"></img></a></Col>
        <Col md={3}>        <a href="mailto: jheidlage6@gmail.com" target="_blank" rel="noopener noreferrer"><img src={gmLogo} width="50"></img></a></Col>
      </Row>
    </Container>
  );
}
