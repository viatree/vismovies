import { Card, Col, Container, Row, Image } from 'react-bootstrap';
import trending1 from "../assets/img/romance.jpg"
import trending2 from "../assets/img/trending 2.jpg"
import trending3 from "../assets/img/trending 3.jpg"
import trending4 from "../assets/img/trending 4.jpg"
import trending5 from "../assets/img/trending 5.jpg"
import trending6 from "../assets/img/trending 6.jpg"
const Trending = () => {
    return(
<div>  
    <Container>
      <br/>
      <br/>
      <h1 className='text-white mt-4'>Trending Movies</h1>
        <Row>
            <Col md={4} className='movieWrapper' id='trending'> 
            <Card className="movieImage">
      <Image src={trending1} alt="Romance"></Image>
      <div className='bg-dark'>
        <div className='p-2 m-1 text-white'>
        <Card.Title className='text-center'>Me,You</Card.Title>
        <Card.Text className='text-left'>
        "Love's Embrace: A heartwarming journey of two souls finding each other amidst life's twists and turns, reminding us that love knows no boundaries."
        </Card.Text>
        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
        </div>
        </div>
    </Card>
    </Col>

    <Col md={4} className='movieWrapper'> 
            <Card className="movieImage">
      <Image src={trending2} alt="Comedy"></Image>
      <div className='bg-dark'>
        <div className='p-2 m-1 text-white'>
        <Card.Title className='text-center'>Deadpool</Card.Title>
        <Card.Text className='text-left'>
        "Deadpool: Where snarky humor, epic action, and a whole lot of fourth-wall-breaking meet in a hilariously chaotic and R-rated adventure!"
        </Card.Text>
        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
        </div>
        </div>
    </Card>
    </Col>

    <Col md={4} className='movieWrapper'> 
            <Card className="movieImage">
      <Image src={trending3} alt="Disney"></Image>
      <div className='bg-dark'>
        <div className='p-2 m-1 text-white'>
        <Card.Title className='text-center'>Mulan</Card.Title>
        <Card.Text className='text-left'>
        "Mulan: A fearless warrior's tale of honor, courage, and the strength to defy tradition, inspiring us all to embrace our true selves."
        </Card.Text>
        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
        </div>
        </div>
    </Card>
    </Col>

    <Col md={4} className='movieWrapper'> 
            <Card className="movieImage">
      <Image src={trending4} alt="Superhero"></Image>
      <div className='bg-dark'>
        <div className='p-2 m-1 text-white'>
        <Card.Title className='text-center'>Joker</Card.Title>
        <Card.Text className='text-left'>
        Unraveling Mysteries: A thrilling trio of enigmatic stories, where the Joker's chaos.
        </Card.Text>
        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
        </div>
        </div>
    </Card>
    </Col>
    <Col md={4} className='movieWrapper'> 
            <Card className="movieImage">
      <Image src={trending5} alt="Animation"></Image>
      <div className='bg-dark'>
        <div className='p-2 m-1 text-white'>
        <Card.Title className='text-center'>Detective Pikachu</Card.Title>
        <Card.Text className='text-left'>
        Detective Pikachu's adorable wit,Advanture,and Mystery
        </Card.Text>
        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
        </div>
        </div>
    </Card>
    </Col>
    <Col md={4} className='movieWrapper'> 
            <Card className="movieImage">
      <Image src={trending6} alt="Mystery"></Image>
      <div className='bg-dark'>
        <div className='p-2 m-1 text-white'>
        <Card.Title className='text-center'>Sherlock Holmes</Card.Title>
        <Card.Text className='text-left'>
        Sherlock Holmes' brilliant deductions collide in an electrifying cinematic experience."
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
export default Trending 