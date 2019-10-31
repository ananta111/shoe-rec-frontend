import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Chip from "@material-ui/core/Chip";
import "../custom-styles.css"
import Button from "@material-ui/core/Button";
import {InputLabel} from "@material-ui/core";
import {post, get, getById} from "./api-requests";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";

class ResultRow extends Component{

    state = {
        brand: "",
        model: "",
        price: "",
        gender: "",
        tags: [],
        size: "",
    };

    componentWillMount() {
        const item = this.props.item;
        const keys = Object.keys(item);
        keys.forEach(key => this.setState({[key]: item[key]}));

    }

    render() {
        return (
            <div className={"resultrow"}>
                <Card>
                    <div>
                        <CardContent className={"cardcontent"}>
                            <Typography>
                                <label>Brand: {this.state.brand} </label>
                            </Typography>
                            <Typography>
                                <label>Model:{this.state.model} </label>
                            </Typography>
                            <Typography>
                                <label>Price: {this.state.price}</label>
                            </Typography>
                            <Typography>
                                <label>Size: {this.state.size}</label>
                            </Typography>
                            <Typography>
                                <label>Gender: {this.state.gender}</label>
                            </Typography>
                        </CardContent>
                        <img className={"shoeimage"}/>
                    </div>
                </Card>
            </div>
        )
    }
}

export default ResultRow;