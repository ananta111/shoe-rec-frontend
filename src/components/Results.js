import React, { Component } from "react";
import "../custom-styles.css"
import Button from "@material-ui/core/Button";
import {InputLabel} from "@material-ui/core";
import {post, get, getById} from "./api-requests";
import ResultRow from "./ResultRow";

class Results extends Component{

    state = {
        results: []
    }

    componentDidMount() {
        console.log(this.props);
    }

    handleBack = () => {
        document.location = "http://localhost:3000/questionnaire"
    }

    render() {
        return (
            <div className={"center"}>
                <h1>Here is what we found</h1>
                <Button variant={"outlined"} onClick={this.handleBack}>Back</Button>
            </div>
        )
    }
}

export default Results;