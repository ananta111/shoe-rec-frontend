import React, { Component } from "react";
import "../custom-styles.css"
import Button from "@material-ui/core/Button";
import {InputLabel} from "@material-ui/core";
import {post, get, getById} from "./api-requests";
import ResultRow from "./ResultRow";

class Results extends Component{

    handleBack = () => {
        document.location = "http://localhost:3000/questionnaire"
    }

    render() {
        const item1 = {brand: "Nike", model: "Air Max", price: "$55", gender: "Male", size: "9.5"};
        const item2 = {brand: "Addidas", model: "Superstar", price: "$45", gender: "Male", size: "9.5"};
        return (
            <div className={"center"}>
                <h1>Here is what we found</h1>
                <ResultRow item = {item1}/>
                <ResultRow item = {item2}/><br/>
                <Button variant={"outlined"} onClick={this.handleBack}>Back</Button>
            </div>
        )
    }
}

export default Results;