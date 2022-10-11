import image from "../Assets/portfoliopic.png";
import image1 from "../Assets/family.JPG"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
  return (
    <Container fluid>
      <Row className="m-2">
        <Col md={4}>
          <img src={image} width={100} className="brand-image" />
        </Col>
        <Col md={8}>
          <p>Full-Stack web developer leveraging 7+ years in leadership, supply chain, and operations management experience, as well as a 2017 graduate of Miami University, obtaining a B.A. in Biology, and a minor in Anthropology. Recent graduate of The Ohio State University Full Stack Web Development Bootcamp with a newly developed skill base in: Javascript, CSS, React.js, and Database Management (SQL/NoSQL/MongoDB). A demonstrated background in continued process improvement, data analysis, root-cause problem solving, and team-building. Passionate to continue to implement these skills in web development to drive an agile, and cohesive team to produce a world-class product for the client. My client-facing target for each project is to create the most efficient, and value added application for our user to enjoy, while also driving a sustainable roadmap with our teams to ensure effective delegation, and group collaboration.</p>
        </Col>
      </Row>
      <Row className="m-2">
        <Col md={8}>
          <p>Jordan Heidlage is a 29 year old career Operations Manager, with years of supply chain industry experience from working in multiple fortune 500 companies. Jordan currently resides in Cincinnati, Ohio with his fiance, Rachel, and Golden Retriever, Kevin. Jordan was born, and raised in Ross, Ohio, just shortly outside of Cincinnati. In grade school, Jordan distinguished himself as a local spelling bee champion, as well as an active competitor in local skateboard competitions, while maintaining several part time jobs. In college, Jordan attended Harding University in Searcy, Arkansas his freshman year where he played Lacrosse. Jordan later transferred to Miami University (Oh), where he obtained a B.A. in Biology, and a minor in Anthropology, while also maintaining a full time leadership position at the campus recreational center. Upon graduation, Jordan completed a Management Training Program with Kohl's Department Stores, Inc, where he discovered his passion for data analytics, and UI. Jordan spent 2 years as an Operations/HR Manager within the Kohl's Corporation, before accepting a role as an Operations Manager with Amazon.com LLC in Hebron, Kentucky to continue to challenge his skills in data analytics, and leadership. In his free time, Jordan loves taking Kevin on hikes, skateboarding, lifting weights, long bikes rides, home improvement projects, and spending time with loved ones. </p>
        </Col>
        <Col md={4}>
          <img src={image1} width={100} className="brand-image" />
        </Col>
      </Row>
      <Row className="m-3">
        <Col>
          <p>Skills:</p>
          <Row>
            <Col md={2}>
              <img src={image} width={50} />
            </Col>
            <Col md={2}>
              <img src={image} width={50} />
            </Col>
            <Col md={2}>
              <img src={image} width={50} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}