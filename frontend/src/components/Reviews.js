import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap'

function Reviews({ userid }) {

    const [reviewData, setReviewData] = useState([]);
    useEffect(() => {
        axios.get(`/users/${userid}/reviews`)
            .then(res => {
                setReviewData(res.data)
                console.log(res.data)
            })
    }, []);

    return (
        <>
            <Table className='mt-3'>
                <thead>
                    <tr>
                        <th>Rating (out of 5)</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>
                    {reviewData.map((review) => (
                        <tr key={review.ratingid}>
                            <td width="180px">{review.rating}</td>
                            <td>{review.review}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default Reviews
