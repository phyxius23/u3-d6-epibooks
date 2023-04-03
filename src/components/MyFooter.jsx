import { Container, Nav } from 'react-bootstrap';

const MyFooter = (props) => (
  <footer>
    <Container>
      <Nav activeKey="#" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)} className="justify-content-center border-bottom pb-3 mb-3">
        <Nav.Item>
          <Nav.Link href="#" className="px-2 text-muted">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="px-2 text-muted">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="px-2 text-muted">Browse</Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="text-center text-muted">&copy; 2022 {props.brand}, Inc</p>
    </Container>
  </footer>
);

export default MyFooter;