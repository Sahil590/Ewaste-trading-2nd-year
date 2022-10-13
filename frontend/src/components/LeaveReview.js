import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap'

function UpdateInfo({ userid }) {
  const [review, setReview] = useState("")
  const [rating, setRating] = useState(null)


  const handleReview = (e) => {   
    setReview(e.target.value)
  }
  const handleRating = (e) => {

    setRating(e.target.value)
  }

  const handleUpdate = (e) => {
    axios.post(`/users/${userid}/leavereview`, {
      userid: {userid},
      review,
      rating
    })
    .then(res => handleClose(), alert('Review added'))
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{ position: "absolute", top: "110px", right: "0px" }}
        variant="primary" onClick={handleShow}>
        Leave Review
        </Button>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header>
          <Modal.Title>Leave a review</Modal.Title>
        </Modal.Header>
        <Form onSubmit={(e) => handleUpdate(e)}>
          <Modal.Body>
              <Form.Row>
                <Col>
                    <Form.Control required value={rating} onChange={(e) => handleRating(e)} as="select">
                        <option value={""}>Select...</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </Form.Control>
                </Col>
                <Col sm={10}>
                    <Form.Control required  type="text" placeholder="Enter the review here"
                    as="input" onChange={(e) => handleReview(e)}/>
                </Col>           
            </Form.Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default UpdateInfo