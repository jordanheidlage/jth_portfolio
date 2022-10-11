import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import whatsForDinner from '../Assets/whatsfordinner.png'

export default function Portfolio() {

  const projectArray = [
    {
      title: 'Whats for dinner',
      description: "This application was created to generate a random food and a random cocktail from two different API's",
      repo: 'https://github.com/jordanheidlage/whatsForDinner',
      deploy: 'https://jordanheidlage.github.io/whatsForDinner/',
      image: whatsForDinner
    },
    {
      title: '',
      description: '',
      repo: '',
      deploy: '',
      image: ''
    },
    {
      title: '',
      description: '',
      repo: '',
      deploy: '',
      image: ''
    },
    {
      title: '',
      description: '',
      repo: '',
      deploy: '',
      image: ''
    },
    {
      title: '',
      description: '',
      repo: '',
      deploy: '',
      image: ''
    },
    {
      title: '',
      description: '',
      repo: '',
      deploy: '',
      image: ''
    },
    {
      title: '',
      description: '',
      repo: '',
      deploy: '',
      image: ''
    }
  ]

  return (
    <Container fluid>
      {projectArray.map((item)=>(
        <Row className='m-2' >
        <Col md={6}>
          <div >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <Row >
            <Col md={2}>
              <Button variant="primary" href={item.repo} size="sm" target='_blank'>repo</Button>
            </Col>
            <Col md={2}>
              <Button variant="primary" href={item.deploy} size="sm" target='_blank'>deploy</Button>
            </Col>

          </Row>
        </Col>
        <Col md={6}>
          <img src={item.image} width={100} className='brand-image'/>
        </Col>
      </Row>
      ))}
      

    </Container>
  );
}
