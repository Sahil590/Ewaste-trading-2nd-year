import React, { Component } from 'react';

class MakeReport extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            tradeid: '',
            reportreason: ''
        }
        this.reportHandler = this.reportHandler.bind(this);
        this.sendReport = this.sendReport.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    sendReport = (e) => {
        e.preventDefault();

        //complete this lmao

    }

    cancel(){
        this.props.history.push('/trades');
    }

    reportHandler = (event) => {
        this.setState({reportreason: event.target.value});
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 p-3">
                            <h3 className = "text-center">Report Trade</h3>
                            <div className = "card-body">
                                <form> 
                                    <label>Reason for Report:</label>
                                    <div className = "form-group">
                                        <input placeholder = "Reason for Report" name = "reportreason" className = "form-control" value = {this.state.reportreason} onChange = {this.reportHandler}/>
                                    </div>
                                    <button onClick = {this.sendReport}>Send Report</button>
                                    <button onClick = {this.cancel} style = {{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default MakeReport;