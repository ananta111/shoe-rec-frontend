import React, { Component } from "react";
import "../custom-styles.css"
import Button from "@material-ui/core/Button";
import ResultRow from "./ResultRow";

class Results extends Component{

    state = {
        results: []
    }

    componentDidMount() {
        this.setState({ results: this.props.location.results })
    }

    handleBack = () => {
        document.location = "http://localhost:3001/questionnaire"
    }

    render() {
        console.log("logged from results", this.state.results)
        return (
            <div className={"center"}>
                <h1>Here is what we found</h1>
                {this.state.results && this.state.results.map(item => <ResultRow item = {item}/>)}<br/>
                <Button variant={"outlined"} onClick={this.handleBack}>Back</Button>
            </div>
        )
    }
}

export default Results;