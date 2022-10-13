import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap'
import FormData from 'form-data'

function UpdateInfo({ userid }) {
    const [name, setName] = useState("")
    const [info, setInfo] = useState("")
    const [picture, setPicture] = useState(null)


    const handleCreate = (e) => {
        var data = new FormData();
        data.append('picture', picture);
        const listingData = { "name": name, "info": info, "userid": { "userid": userid } };
        const blob = new Blob([JSON.stringify(listingData, null, 2)], { type: 'application/json' });
        data.append('listing', blob, { contentType: 'application/json' });

        var config = {
            method: 'post',
            url: 'http://localhost:8080/listing/create',
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                alert('Listing created');
                handleClose();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button style={{ position: "absolute", top: "65px", right: "0px" }}
                variant="primary" onClick={handleShow}>
                Create Listing
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
                    <Modal.Title>Create New Listing</Modal.Title>
                </Modal.Header>
                <Form onSubmit={(e) => handleCreate(e)}>
                    <Modal.Body>
                        <Form.Row>
                            <Col>
                                <Form.Control type="text" placeholder="Enter the name of the product"
                                    as="input" onChange={(e) => setName(e.target.value)} />
                            </Col>
                            <Col>
                                <Form.File enctype="multipart/form-data" label="Insert image (.jpeg, .png)"
                                    accept="image/jpeg, image/png" onChange={(e) => setPicture(e.target.files[0] || e.dataTransfer.files[0])} />
                            </Col>
                        </Form.Row>
                        <Form.Control className="mt-2" type="text" placeholder="Enter some information"
                            as="input" onChange={(e) => setInfo(e.target.value)} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit">
                            Create
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default UpdateInfo