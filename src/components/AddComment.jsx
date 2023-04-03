import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {

  state = {
    review: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
  };

  fetchAddComment = async (e) => {

    e.preventDefault()

    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/',
        {
          method: 'POST',
          body: JSON.stringify(this.state.review),
          headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhY2Q2MjY4MzQzMTAwMTRkZWE3ODUiLCJpYXQiOjE2ODA1MjY2OTEsImV4cCI6MTY4MTczNjI5MX0.vy9fmsltjGETuelig9L2wa8VI9MS2Gu7Cs5mg89JqKw',
          },
        }
      );
      
      console.log(response.ok);
      
      if(response.ok) {

        console.log("Review inviata", response.ok);
        
        this.setState({
          review: {
            comment: "",
            rate: 1,
            elementId: this.props.asin,
          },      
        })
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error)
    }
  }

  render(){
    return(
      <Form onSubmit={this.fetchAddComment}>

        <Form.Group className="mb-3" controlId="review">
          <Form.Label>Inserisci recensioni</Form.Label>
          <Form.Control as="textarea" rows={3} 
            placeholder="Inserisci qui la tua recensione"
            value={this.state.review.comment}
            onChange={ (e) => this.setState({
              review: {
                ...this.state.review,
                comment: e.target.value,
              }
            })}
            />
        </Form.Group>

        <Form.Group>
          <Form.Label>Assegna un voto</Form.Label>
          <Form.Select 
            className="mb-3" 
            aria-label="Default select example"
            value={this.state.review.rate}
            onChange={(e) => this.setState({
              review: {
                ...this.state.review,
                rate: e.target.value,
              },
            })}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Salva
        </Button>
      </Form>
    )
  }
}
export default AddComment