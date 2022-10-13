import axios from 'axios';
import { Button, Form, Col, Table } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import convertListingDate from '../utils/functions'

const Trades = () => {

    const [trades, setTrades] = useState([]);

    useEffect(() => {
            axios.get("/trades")
                .then(res => {
                    setTrades(res.data)
                    console.log(trades)
            })
        }
    , []);

    return (
        <>
            <Table bordered>
                <thead>
                    <th>Trade Number</th>
                    <th>User 1</th>
                    <th>User 1's item</th>
                    <th>User 2</th>
                    <th>User 2's item</th>
                    <th>Date of trade</th>
                </thead>
                <tbody>
                    {trades.map((trade) => (
                        <tr key={trade.tradeid}>
                            <td width="180px">{trade.tradeId}</td>
                            <td>{trade.traderName}</td>
                            <td>{trade.traderItemName}</td>
                            <td>{trade.tradeeName}</td>
                            <td>{trade.tradeeItemName}</td>
                            <td>{convertListingDate(trade.date)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default Trades
