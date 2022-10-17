import React from 'react';
import logo from '../Assets/jth.jpeg'
import Card from 'react-bootstrap/Card';
export default function Home() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body className="">
        <Card.Title>Card Title</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="https://www.linkedin.com/in/jordan-heidlage-b31518a4/">LinkedIn</Card.Link>
        <Card.Link href="https://github.com/jordanheidlage">Github</Card.Link>
      </Card.Body>
    </Card>
  );
}
