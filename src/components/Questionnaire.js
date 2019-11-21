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
import {Route} from "react-router-dom"
import {post, get, getRecommendations} from "./api-requests";
import InputForm from "./InputForm";

class Questionnaire extends Component{
    state = {
        age: "",
        gender: "",
        budget: "",
        tags: [],
        size: "",
        tagOptions: ["urban", "casual", "kid", "hip", "young", "teenager", "classy", "oldschool", "simple", "professional", "artist", "musician", "girl", "party", "basic"],
        showSubmitButton: false
    };

    checkCompleteness() {
        const { age, gender, budget, tags, size} = this.state;
        if (age && gender && budget && tags && size ){
            this.setState({showSubmitButton: true});
        } else {
            this.setState({showSubmitButton: false})
        }
    }

    handleChange = async (e) => {
        const input = e.target.name;
        await this.setState({[input]: e.target.value});
        await this.checkCompleteness();
    };

    handleSubmit = async () =>{
        let {age, gender, budget, size, tags } = this.state;
        budget = Number(budget);
        const data = {age, gender, budget, size, tags};
        console.log("dadada", data);
        const results = await getRecommendations(data);
        console.log(results);
        this.props.history.push(
            {
                pathname: "/results",
                results: results.data,
            }
        );
    };

    render() {
        return (
            <div className={"center"}>
                <h1>Please answer a few questions about the gift receiver</h1>
                <FormControl required={true}>
                    <InputLabel htmlFor="age">Age</InputLabel>
                    <Input
                        onChange={e => this.handleChange(e)}
                        name="age"
                        placeholder="Age"
                        defaultValue=""
                        inputProps={{
                            'aria-label': 'description',
                        }}
                    />
                </FormControl>

                <br/><br/>

                <FormControl required={true}>
                    <InputLabel htmlFor="size">Size</InputLabel>
                    <Input
                        onChange={e => this.handleChange(e)}
                        name="size"
                        placeholder="Size"
                        defaultValue=""
                        inputProps={{
                            'aria-label': 'description',
                        }}
                    />
                </FormControl>

                <br/><br/>

                <FormControl required={true}>
                    <InputLabel htmlFor="budget">Budget</InputLabel>
                    <Input
                        endAdornment={"$"}
                        onChange={e => this.handleChange(e)}
                        name="budget"
                        placeholder="Budget"
                        defaultValue=""
                        inputProps={{
                            'aria-label': 'description',
                        }}
                    />
                </FormControl>

                <br/><br/>

                <br/><br/>

                <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <Select
                        required
                        autoWidth={true}
                        name = "gender"
                        value={this.state.gender}
                        onChange={e => this.handleChange(e)}
                    >
                        <MenuItem value = "Male" >Male</MenuItem>
                        <MenuItem value = "Female" >Female</MenuItem>
                        <MenuItem value = "Unisex" >Unisex</MenuItem>
                    </Select>
                </FormControl><br/><br/>

                <FormControl>
                    <FormLabel>Tags</FormLabel>
                    <Select
                        required
                        autoWidth={true}
                        multiple
                        name = "tags"
                        value={this.state.tags}
                        onChange={e => this.handleChange(e)}
                        renderValue={selected => (
                            <div>
                                {selected.map(value => (
                                    <Chip key={value} label={value}/>
                                ))}
                            </div>
                        )}
                    >
                        {this.state.tagOptions.map(tag => (
                            <MenuItem key={tag} value={tag}>
                                {tag}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl><br/><br/>
                {this.state.showSubmitButton && <Button variant={"outlined"} onClick={this.handleSubmit}>Submit</Button>}
            </div>
        )
    }
}

export default Questionnaire;