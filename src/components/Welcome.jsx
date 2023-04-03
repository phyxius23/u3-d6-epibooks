import {Container} from 'react-bootstrap';

const Welcome = (props) => (
  <Container className='my-5 p-5 bg-light rounded'>
    <h1 className="display-4">{props.title}</h1>
    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <p className="lead">
      <a className="btn btn-dark btn-lg" href='#learn' role="button">Learn more</a>
    </p>
  </Container>
);

export default Welcome;