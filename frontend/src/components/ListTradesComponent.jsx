import React, { Component } from 'react';
import TradeService from '../services/TradeService'

class ListTradesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            trades: []
        }
        this.makeReport = this.makeReport.bind(this);
    }
    
    makeReport(id){
        this.props.history.push(`/report/${id}`);
    }

    componentDidMount(){

        TradeService.getTrades().then((res) => {

            this.setState({trades: res.data});

        });

    }

    render() {
        return (

            <div class="p-3">

                <h2 className = "text-center">List of Past Trades</h2>

                <div className = "row" class="p-1">

                    <table className = "table table-striped table-bordered">

                        <thead>

                            <tr>

                                <th>Product Name</th>
                                <th>Trader ID</th>
                                <th>Date</th>
                                <th>Product Description</th>
                                <th>Report</th>

                            </tr>

                        </thead>
                            
                        <tbody>

                            {

                                 this.state.trades.map(
                                    trade =>
                                    <tr key = {trade.id}>
                                        <td>{trade.productname}</td>
                                        <td>{trade.traderid}</td>
                                        <td>{trade.date}</td>
                                        <td>{trade.productdesc}</td>
                                        <td className = "text-center">
                                            <button onClick = { () => this.makeReport(trade.tradeid)}>Report</button>
                                        </td>
                                    </tr>
                                )

                            }

                            </tbody>
                            
                    </table>

                </div>

            </div>
        );
    }
}

export default ListTradesComponent;