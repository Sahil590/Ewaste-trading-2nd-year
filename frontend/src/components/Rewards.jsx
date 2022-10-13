import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Button, Col, Row, CardColumns, CardDeck, CardGroup } from 'react-bootstrap'
import convertListingDate from '../utils/functions'
import RedeemReward from './RedeemReward'

const Rewards = () => {

    const [rewards, setRewards] = useState([])

    useEffect(() => {
        axios.get('/rewards')
            .then(res => {
                setRewards(res.data)
                console.log(res.data)
            })

    }, [])


    return (
        <>
           <CardColumns>
                    {rewards.map((reward) => (
                        <Card className="text-center">
                            <Card.Header>{reward.cost} points</Card.Header>
                            <Card.Body>
                                <Card.Title>{reward.title}</Card.Title>
                                <Card.Text>
                                    {reward.description}
                                </Card.Text>
                                <RedeemReward reward={reward} />
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Row>
                                    <Col>
                                        <small>Date Posted: {convertListingDate(reward.dateposted)}</small>
                                    </Col>
                                    <Col>
                                        <small>Expiry Date: {convertListingDate(reward.expirydate)}</small>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    ))}
            </CardColumns>
        </>
    )
}

export default Rewards