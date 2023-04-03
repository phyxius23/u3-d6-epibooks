import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {

  state = {
    reviews: []
  };

  fetchReviews = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, 
        {
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhY2Q2MjY4MzQzMTAwMTRkZWE3ODUiLCJpYXQiOjE2ODA1MjY2OTEsImV4cCI6MTY4MTczNjI5MX0.vy9fmsltjGETuelig9L2wa8VI9MS2Gu7Cs5mg89JqKw"
          }
        }
      );

      console.log(response)

      if(response.ok) {
        const reviews = await response.json();
        console.log("fetch dell'oggetto: ", reviews);

        // this.setState({reviews: reviews})
        this.setState({ reviews: reviews }, () => {console.log(this.state.reviews)})
      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount = () => {
    console.log('didMount()');
    this.fetchReviews();
  };

  render(){
    return(
      <>
        <AddComment asin={this.props.asin}/>
        <CommentsList reviewsShow={this.state.reviews} />
      </>
    )
  }
}
export default CommentArea;