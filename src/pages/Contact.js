import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// hook to make form responsive
import { useForm } from 'react-hook-form';

// function App() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   return (
//     <form onSubmit={handleSubmit(data => console.log(data))}>
//       <input {...register('firstName')} />
//       <input {...register('lastName', { required: true })} />
//       {errors.lastName && <p>Last name is required.</p>}
//       <input {...register('age', { pattern: /\d+/ })} />
//       {errors.age && <p>Please enter number for age.</p>}
//       <input type="submit" />
//     </form>
//   );
// }
export default function Contact() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full name</Form.Label>
              <Form.Control type="text" placeholder="Full name" />
              <Form.Text className="text-muted">
                name form text element
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
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
