import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';

// import { validateEmail } from '../utils/helpers'

export default function Contact() {
  //   Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
    const { name, value, message } = e.target;
        // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
        return name === 'firstName' ? setName(value) : setEmail(value);
  }
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Form>
          <Form.Group className="text-light mb-3" controlId="formBasicEmail">
              <Form.Label>Full name</Form.Label>
              <Form.Control value={name} onChange={handleInputChange} required type="text" placeholder="Full name" />
              <Form.Text className="text-muted">
                Please enter your preferred name
              </Form.Text>
            </Form.Group>
            <Form.Group className="text-light mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control value={email} onChange={handleInputChange} required type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="text-light mb-3" controlId="formBasicPassword">
              <Form.Label>Message</Form.Label>
              <Form.Control value={message} onChange={handleInputChange} as="textarea" rows={3} placeholder="What's up?" />
            </Form.Group>
           
            <Button variant="primary" type="submit" onClick={handleFormSubmit}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
