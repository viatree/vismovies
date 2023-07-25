import { Card, Col, Container, Row, Image } from 'react-bootstrap';
import superhero from "../assets/img/superhero6.jpg"
import superhero2 from "../assets/img/superhero.avif"
import superhero3 from "../assets/img/superhero.jpg"
import superhero4 from "../assets/img/superhero3.png"
import superhero5 from "../assets/img/superhero4.jpg"
import superhero6 from "../assets/img/superhero5.webp"
const Superhero = () => {
    return(
<div>  
    <Container>
      <br/>
      <br/>
      <h1 className='text-white mt-4'>Superhero Movies</h1>
        <Row>
            <Col md={4} className='movieWrapper' id='superhero'> 
            <Card className="movieImage">
      <Image src={superhero} alt="Aquaman" className='images'></Image>
      <div className='bg-dark'>
        <div className='p-2 m-1 text-white'>
        <Card.Title className='text-center'>Aquaman</Card.Title>
        <Card.Text className='text-left'>
        "Ocean's Guardian: Dive into a breathtaking underwater adventure with Aquaman, where the fate of two worlds rests in the hands of a reluctant hero destined to rule the seas."
        </Card.Text>
        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
        </div>
        </div>
    </Card>
    </Col>

    <Col md={4} className='movieWrapper'> 
            <Card className="movieImage">
      <Image src={superhero2} alt="Marvel" className='images'></Image>
      <div className='bg-dark'>
        <div className='p-2 m-1 text-white'>
        <Card.Title className='text-center'>Marvel</Card.Title>
        <Card.Text className='text-left'>
        "Marvel: Where imagination knows no bounds, and extraordinary heroes rise to save the universe, captivating audiences with epic tales of courage, camaraderie, and endless possibilities."
        </Card.Text>
        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
        </div>
        </div>
    </Card>
    </Col>

    <Col md={4} className='movieWrapper'> 
            <Card className="movieImage">
      <Image src={superhero3} alt="Superhero" className='images'></Image>
      <div className='bg-dark'>
        <div className='p-2 m-1 text-white'>
        <Card.Title className='text-center'>Heroes</Card.Title>
        <Card.Text className='text-left'>
        "Discover a world where ordinary individuals rise to extraordinary heights, wielding incredible powers and undying determination to protect humanity and inspire us all."
        </Card.Text>
        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
        </div>
        </div>
    </Card>
    </Col>

    <Col md={4} className='movieWrapper'> 
            <Card className="movieImage">
      <Image src={superhero4} alt="Justice League" className='images'></Image>
      <div className='bg-dark'>
        <div className='p-2 m-1 text-white'>
        <Card.Title className='text-center'>Justice League</Card.Title>
        <Card.Text className='text-left'>
        Justice League as they forge an epic alliance to defend Earth from unimaginable threats, combining their strengths to prove that heroes from land and sea are stronger together."
        </Card.Text>
        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
        </div>
        </div>
    </Card>
    </Col>
    <Col md={4} className='movieWrapper'> 
            <Card className="movieImage">
      <Image src={superhero5} alt="Avanger"className='images' ></Image>
      <div className='bg-dark'>
        <div className='p-2 m-1 text-white'>
        <Card.Title className='text-center'>Avanger</Card.Title>
        <Card.Text className='text-left'>
        "Earth's Mightiest Heroes: Assemble! The Avengers unite in an epic battle against evil, showcasing the power of teamwork, sacrifice, and unwavering heroism to protect the world and restore hope."
        </Card.Text>
        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
        </div>
        </div>
    </Card>
    </Col>
    <Col md={4} className='movieWrapper'> 
            <Card className="movieImage">
      <Image src={superhero6} alt="The Avanger - Last Game" className='images'></Image>
      <div className='bg-dark'>
        <div className='p-2 m-1 text-white'>
        <Card.Title className='text-center'>The Avanger - Last Game</Card.Title>
        <Card.Text className='text-left'>
        "Avengers: Assemble for the Ultimate Showdown! Earth's mightiest heroes unite to save humanity from the brink of destruction, armed with extraordinary powers and indomitable spirit."
        </Card.Text>
        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
        </div>
        </div>
    </Card>
    </Col>
            </Row>
            </Container>  
    </div>
    )
}
export default Superhero