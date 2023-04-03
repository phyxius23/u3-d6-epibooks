import { Component } from 'react';
import {Card, Badge} from 'react-bootstrap';
import CommentArea from './CommentArea';

class SingleBook extends Component {

  state = {
    selected: false
  };
  
  render() {
    return (
      <>
        <Card>
          <Card.Img variant="top" 
            src={this.props.book.img} 
            onClick={() => { this.setState({selected: !this.state.selected})}}
            style={{ border: this.state.selected ? '3px solid green' : 'unset' }}
          />

          <Card.Body className='mt-auto'>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>
              <Badge>{this.props.book.category}</Badge>
            </Card.Text>
            <Card.Text className='text-end'>€ {this.props.book.price}</Card.Text>
          </Card.Body>

        </Card>

        {/* visualizza il componente CommentArea solo quando state.selected è true*/}
        {this.state.selected && (<CommentArea asin={this.props.book.asin}/>)}
      </>
    )
  }
}

export default SingleBook;