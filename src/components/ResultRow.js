import React, { Component } from "react";
import "../custom-styles.css"
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


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
                        <img className={"shoeimage"} src={require("../images/shoe_image.jpeg")}/>
                    </div>
                </Card>
            </div>
        )
    }
}

export default ResultRow;