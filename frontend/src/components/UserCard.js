import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import usericon from '../Photos/usericon.png'

function UserCard ({ users }) {
    return (
        <>
            <Col className='mt-3 d-flex justify-content-center' md={3}>
                <Card as={Link} to={`/users/${users.userid}`} >

                    
                    <Card.Img className="d-flex justify-content-center" style={{width: '200px', height: '200px'}} variant="top" src={usericon} /> 

                    <Card.Title className="d-flex justify-content-center">
                        {users.firstname}
                    </Card.Title>

                    <Card.Subtitle className='text-muted d-flex justify-content-center'>
                        {users.userinfo}
                    </Card.Subtitle>
                    
                </Card>
            </Col>
        </>
    )
}

export default UserCard