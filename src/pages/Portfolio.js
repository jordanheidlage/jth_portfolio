import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import whatsForDinner from '../Assets/whatsfordinner.png'
import socialNetworkAPI from '../Assets/socialnetwork.png'
import writersBlock from '../Assets/writersblock.png'
import employeeTracker from '../Assets/employeetracker.png'
import ecommerce from '../Assets/ecommercebackend.png'
import jate from '../Assets/jate.png'
import weather from '../Assets/weather.png'
import explorar from '../Assets/explorar.png'
import notetaker from '../Assets/noteTaker.png'
import teamgenerator from '../Assets/teamProfileGenerator.png'


export default function Portfolio() {

  const projectArray = [
    {
      title: 'Explorar',
      description: "This application utilizes the full MERN stack to allow users to create an account, sign in, and save travel preferences for up to 6 different countries.",
      repo: 'https://github.com/jordanheidlage/Explorar',
      deploy: 'https://explorar-project3.herokuapp.com/',
      image: explorar
    },
    {
      title: 'Social Network API - MongoDB ',
      description: 'This application was created to utilize MongoDB database management, and Insomnia to test the correct functionality of API routes for a social networking site. You can create users, share thoughts, react to friends thoughts, and create a list of friends.',
      repo: 'https://github.com/jordanheidlage/social_network_API_jheidlage',
      deploy: 'https://drive.google.com/file/d/1UaWeDR4srUhVB8_5MJwDURKwLGEqeQtO/view',
      walkthrough: 'https://drive.google.com/file/d/1UaWeDR4srUhVB8_5MJwDURKwLGEqeQtO/view',
      image: socialNetworkAPI
    },
    {
      title: 'Text Editor - Progressive Web Application',
      description: 'This application allows the user to edit text in a browser based js text editor, with offline capability to demonstrate Progressive Web Application functionality ',
      repo: 'https://github.com/jordanheidlage/jth_text_editor',
      deploy: 'https://jth-jate.herokuapp.com/',
      image: jate
    },
    {
      title: 'Whats for dinner',
      description: "This application was created to generate a random food, and a random cocktail from two different API's, saving them in local storage for the user to call upon later",
      repo: 'https://github.com/jordanheidlage/whatsForDinner',
      deploy: 'https://jordanheidlage.github.io/whatsForDinner/',
      image: whatsForDinner
    },
    {
      title: 'E-Commerce Backend (ORM)',
      description: 'This was created to create a backend for an e-commerce website that uses the latest technologies so that the company can compete with other e-commerce companies. This project utilizes MySQL, npm libraries, and insomnia to perform CRUD operations to the database to manage/view categories, tags, and products.',
      repo: 'https://github.com/jordanheidlage/ecommerce_backend_jh',
      deploy: 'https://drive.google.com/file/d/1Pi5KlrGD_QrBSJYlYuZQiJpuh_gi5Zri/view',
      walkthrough: 'https://drive.google.com/file/d/1Pi5KlrGD_QrBSJYlYuZQiJpuh_gi5Zri/view',
      image: ecommerce
    },
    {
      title: 'Team Profile Generator',
      description: "This application allows the user to utilize node commands to generate an HTML page displaying profiles for each member of their team.",
      repo: 'https://github.com/jordanheidlage/team_profile_generator',
      deploy: 'https://drive.google.com/file/d/1PM25f7arPMmFbAC2dWtiPoQN4OEoV4hO/view?usp=sharing',
      image: teamgenerator
    },
    {
      title: "Writer's Block",
      description: 'This application allows user to publish their writings and allows the community to edit them constructively, so authors can improve their writings with community input.',
      repo: 'https://github.com/jordanheidlage/writers_block',
      deploy: 'https://writers-block-jh.herokuapp.com/',
      walkthrough: '',
      image: writersBlock
    },
    {
      title: 'Employee Tracker - SQL',
      description: "This application allows the user to utilize .js scripts to keep an active database of their associates in the terminal: roles, salaries, direct reports, and job Id's, with the functionality to add other fields",
      repo: 'https://github.com/jordanheidlage/employee_tracker_jh',
      deploy: 'https://drive.google.com/file/d/1eePGCbG-aBpfLd7_9j7RSmNv6kgUlBIz/view',
      walkthrough: 'https://drive.google.com/file/d/1eePGCbG-aBpfLd7_9j7RSmNv6kgUlBIz/view',
      image: employeeTracker
    },
    {
      title: 'Weather Dashboard',
      description: 'This application uses the OpenWeather One Call API to retrieve weather data for cities, and display the current weather, as well as temperature, wind speed, humidity, and the UV index. This application also uses localStorage to store previously searched cities. Additionally, it provides a five day forecast of the same city below containing the temperature, wind, and humidity.',
      repo: 'https://github.com/jordanheidlage/sixth-homework',
      deploy: 'https://jordanheidlage.github.io/weather_dashboard_jth/',
      image: weather
    },
    {
      title: 'Note Taker',
      description: "This application allows the user to take notes, and save them as persistent data to be reviewed later",
      repo: 'https://github.com/jordanheidlage/note_taker_jth',
      deploy: 'https://note-takerjh.herokuapp.com/',
      image: notetaker
    },
  ]

  return (
    <Container fluid>
      {projectArray.map((item)=>(
        <Row className='text-light m-2' >
        <Col md={6}>
          <div >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <Row >
            <Col md={3}>
              <Button variant="secondary" href={item.repo} size="lg" target='_blank'>Repository</Button>
            </Col>
            <Col md={2}>
              <Button variant="secondary" href={item.deploy} size="lg" target='_blank'>Deploy</Button>
            </Col>
            {/* <Col md={2}>
              <Button variant="primary" href={item.walkthrough} size="sm" target='_blank'>Walkthrough</Button>
            </Col> */}

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
