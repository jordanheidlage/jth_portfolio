import image from "../Assets/portfoliopic.png";
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
          <p>Jordan Heidlage is a 29 year old career Operations Manager, with years of supply chain industry experience from working in multiple fortune 500 companies. Jordan currently resides in Cincinnati, Ohio with his fiance, and Golden Retriever, Kevin.</p>
        </Col>
        <Col md={4}>
          <img src={image} width={100} className="brand-image" />
        </Col>
      </Row>
      <Row className="m-3">
        <Col>
          <p>Skillz I know:</p>
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

    // <Stack gap={2} className="col-md-5 mx-auto">
    //   <div className="bg-light border mx-auto d-block">
    //     <img src={image} width={100} />
    //   </div>
    //   {/* <div className="bg-light border mx-auto d-block"> */}
    //   {/* </div> */}
    //   <div className="bg-light border">Third item</div>
    // </Stack>
  );
}