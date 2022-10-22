import liLogo from '../Assets/linkedInIcon.png'
import ghLogo from '../Assets/GHIcon.png'
import gmail from '../Assets/gmail.png'
import facebook from '../Assets/fbicon.png'
import ListGroup from 'react-bootstrap/ListGroup';



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  return (
    <Container fluid>
      <Row className="about-background text-light">
      <Col md={4}>
              <h5>A demonstrated problem-solver, with a focus on continuous improvement. Listed are the languages, and tools that I'm proficient in. Please utilize the navigational tabs in the top right to explore my portfolio!</h5>
        </Col>
        <Col md={4}>
            <ul>
              <h5>Languages:</h5>
              <li>Javascript</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>Node.js</li>
              <li>React.js</li>
              <li>Bootstrap</li>
              <li>SQL</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
        </Col>
        <Col md={4}>
          <ul>
            <h5>Tools:</h5>
            <li>Visual Studio</li>
            <li>MySQL Workbench</li>
            <li>Apollo GraphQL</li>
            <li>MongoDB Compass</li>
            <li>Microsoft Excel</li>
          </ul>
        </Col>
      </Row>
      <Row className="text-light m-2 text-center">
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
