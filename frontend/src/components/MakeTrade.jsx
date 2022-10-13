import axios from 'axios';
import { Modal, Button, Form, Col } from 'react-bootstrap'
import React, { useState } from 'react';
import { Row } from "react-bootstrap";
import ListingCard from "./ListingCard";
import { Redirect } from 'react-router';

function MakeTrade({ listing }) {

  const [listings, setListing] = useState([])


  const handleTrade = (e, listingName, firstname, traderid) => {
    if (window.confirm("Are you sure?")) {
      axios.post('/maketrade', {
      tradeeName: listing.userid.firstname,
      tradeeItemName: listing.name,
      traderItemName: listingName,
      traderName: firstname,
      traderId: traderid,
      tradeeId: listing.userid.userid
    }
    )
    alert("Trade complete, 500 points awarded")
    window.location.href = '/trades'
  }
}

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    axios.get(`/listing/${listing.userid.userid}/fortrade`)
      .then(res => {
        setListing(res.data)
        console.log(res.data)
      })
    setShow(true)
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Make Trade
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
          <Modal.Title>Select which item to trade</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row>
            {listings.map((selectedlisting) => (
              <>
              <ListingCard
                listings = {selectedlisting}
               />
               <Col>
                <Button  size="sm" onClick = {(e) => handleTrade(e, selectedlisting.name, selectedlisting.userid.firstname, selectedlisting.userid.userid)}>
                  Select
                </Button>  
              </Col> 
              </>
            ))}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  );
}

export default MakeTrade;