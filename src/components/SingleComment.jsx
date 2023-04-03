import { ListGroup } from 'react-bootstrap'

const SingleComment = (props) => {
  return (
    <ListGroup.Item>
      {props.review.comment}
    </ListGroup.Item>
  )
}

export default SingleComment
