import React, { Component } from 'react';
import ReportService from '../services/ReportService'

class ReviewReports extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reports: []
        }
    }
    
    componentDidMount(){

        ReportService.getReports().then((res) => {

            this.setState({reports: res.data});

        });

    }

    render() {
        return (
            <div class="p-3">
                <h2 className = "text-center">List of Reported Trades</h2>
                <div className = "row" class="p-1">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Trade Number</th>
                                <th>Report Reason</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.reports.map(
                                    report => 
                                    <tr key = {report.id}>
                                        <td>{report.tradeid}</td>
                                        <td>{report.reportreason}</td>
                                        <td className = "text-center">
                                            <button onClick = {{}}>Ban user</button>
                                            <button onClick = {{}} style = {{marginLeft: "10px"}}>Ignore</button>
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

export default ReviewReports;