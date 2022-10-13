import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Image, Row , Button } from 'react-bootstrap';
import  convertListingDate  from "../utils/functions";
import MakeTrade from './MakeTrade'


const Listing = () => {

    const {listingid} = useParams()
    const [listing, setListing] = useState({})

    useEffect(() => {
        axios.get(`/listing/${listingid}`)
            .then(res => {
                setListing(res.data)
                console.log(res.data)
            })
    }, []);


    return (
       <>
            <Row>
                <Col className='mb-4' md = {4} >
                    <Image src={`/images/${listing.picture}`} rounded fluid />
                </Col>
                <Col className='mb-4' md = {8}>
                    <div>
                        <p className='display-4'>{listing.name}</p>
                        <p>{convertListingDate(listing.dateadded)}</p>
                        <p>{listing.info}</p>
                    </div>
                    
                </Col>
            </Row>
            <Row >
                <div class="col text-center">
                    <MakeTrade listing={listing} />
                </div>
            </Row>
       </>
    )
}

export default Listing