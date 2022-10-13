import { Modal, Button, Row, Col } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import getPoints from '../services/pointsService'
import axios from 'axios';

function RedeemReward({ reward }) {

    const [show, setShow] = useState(false);

    const [points, setPoints] = useState(0);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true)

    useEffect(() => {
        getPoints(setPoints)
    }, [])

    const handleConfirm = () => {
        axios.put(`/rewards/${reward.rewardid}/redeem`,{
            rewardId: reward.rewardId
        })
        .then(res => handleClose(), alert("Reward redeemed"))
        window.location.reload()
    }


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Redeem
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
                    <Modal.Title>Redeem Reward</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Row>
                        <Col className='text-center'>
                            <p>You have {points} points</p>
                            {points < reward.cost ? <a>You don't have enough points</a> :
                                <Row>
                                    <Col>
                                        <Button onClick={handleConfirm}>
                                            Confirm
                                        </Button>
                                    </Col>
                                </Row>
                            }
                        </Col>
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

export default RedeemReward;