import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { checkPassword, validateEmail } from '../utils/helpers'

export default function Contact() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Form>
            <Form.Group className="text-light mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control required type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="text-light mb-3" controlId="formBasicEmail">
              <Form.Label>Full name</Form.Label>
              <Form.Control required type="text" placeholder="Full name" />
              <Form.Text className="text-muted">
                name form text element
              </Form.Text>
            </Form.Group>

            <Form.Group className="text-light mb-3" controlId="formBasicPassword">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="What do you want" />
            </Form.Group>
           
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
