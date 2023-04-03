import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = (props) => (
  <ListGroup className="mt-2">
    {props.reviewsShow.map((review) => (
      <SingleComment review={review} key={review._id} />
    ))}
  </ListGroup>
)

export default CommentList
