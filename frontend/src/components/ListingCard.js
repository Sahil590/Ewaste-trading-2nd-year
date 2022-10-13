import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ListingCard ({ listings }) {
    return (
        <>
            <Col className='mt-3' md={4}>
                <Card style={{ width: '18rem' }} as={Link} to={`/listing/${listings.listingid}`} >
                    <Card.Img variant="top" src={`/images/${listings.picture}`} />

                    <Card.Title>
                        {listings.name}
                    </Card.Title>

                    <Card.Subtitle className='text-muted'>
                        {listings.date}
                    </Card.Subtitle>

                    <Card.Text>
                        {listings.info}
                    </Card.Text>
                </Card>
            </Col>
        </>
    )
}

export default ListingCard