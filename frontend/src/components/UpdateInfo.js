import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'

function UpdateInfo({ profileData }) {
  const [userinfo, setUserInfo] = useState("")

  const handleChange = (e) => {   
    setUserInfo(e.target.value)
  }

  const handleUpdate = (e) => {
    console.log(profileData)
    axios.put(`/users/${profileData.userid}/infoupdate`, {
      userid: profileData.userid,
      email: profileData.email,
      userinfo: userinfo,
      password: profileData.password,
      firstname: profileData.firstname,
      lastname: profileData.lastname,
      isEnabled: profileData.isEnabled,
      points: profileData.points
    })
    .then(res => handleClose(), alert('Update Successful'))
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{ position: "absolute", top: "20px", right: "0px" }}
        variant="primary" onClick={handleShow}>
        Update Info
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
          <Modal.Title>Please update your information</Modal.Title>
        </Modal.Header>
        <Form onSubmit={(e) => handleUpdate(e)}>
          <Modal.Body>
            <Form.Control type="text" placeholder="Enter some information"
              as="input" onChange={(e) => handleChange(e)}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default UpdateInfo