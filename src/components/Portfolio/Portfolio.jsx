import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import dimifua from '../.././assets/item-1.png';
import logo from '../.././assets/logo.png';
import myLogo from '../.././assets/myLogo.svg';

function Portfolio() {
  return (
    <div className="d-flex justify-content-around flex-wrap">
      <Card style={{ width: '18rem', marginBottom: '1rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" href="https://www.freecodecamp.org/" target='blank'>Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', marginBottom: '1rem' }}>
        <Card.Img variant="top" src={dimifua} />
        <Card.Body>
          <Card.Title>Comfort House</Card.Title>
          <Card.Text>
            The site of the utility company
          </Card.Text>
          <Button variant="primary" href='https://dimif.if.ua/' target='blank'>Wisit site</Button>
          {/* <Button variant="primary" href='https://dimif.if.ua/' target='blank'>Source</Button> */}
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', marginBottom: '1rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', marginBottom: '1rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', marginBottom: '1rem' }}>        
        <Card.Img variant="top" src={logo} />        
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', marginBottom: '1rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>      
    </div>
  );
}

export default Portfolio;