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

class InputForm extends Component{
    state = {
        brand: "",
        model: "",
        price: "",
        gender: "",
        tags: [],
        size: "",
        tagOptions: ["urban", "casual", "kid", "hip", "young", "teenager", "classy", "oldschool", "simple", "professional", "artist", "musician", "girl", "party", "basic"],
        showSubmitButton: false
    };

    checkCompleteness() {
        const { brand, model, price, gender, tags, size} = this.state;
        if (brand && model && price && gender && tags && size ){
            this.setState({showSubmitButton: true});
        } else {
            this.setState({showSubmitButton: false})
        }
    }

    handleChange = async (e) => {
        const input = e.target.name;
        this.setState({[input]: e.target.value});
        await this.checkCompleteness();
    };

    handleSubmit = async () => {
        const { brand, model, price, gender, tags, size} = this.state;
        const data = { model, brand, price, gender, tags, size};
        await post(data);
    };

    render() {
        return (
            <div className={"center"}>
                <h1>Add Shoes to Inventory</h1>
                <FormControl required={true}>
                    <InputLabel htmlFor="bramd">Brand</InputLabel>
                    <Input
                        onChange={e => this.handleChange(e)}
                        name="brand"
                        placeholder="Brand"
                        defaultValue=""
                        inputProps={{
                            'aria-label': 'description',
                        }}
                    />
                </FormControl>

                <br/><br/>

                <FormControl required={true}>
                    <InputLabel htmlFor="model">Model</InputLabel>
                    <Input
                        onChange={e => this.handleChange(e)}
                        name="model"
                        placeholder="Model"
                        defaultValue=""
                        inputProps={{
                            'aria-label': 'description',
                        }}
                    />
                </FormControl>

                <br/><br/>

                <FormControl required={true}>
                    <InputLabel htmlFor="price">Price</InputLabel>
                    <Input
                        endAdornment={"$"}
                        onChange={e => this.handleChange(e)}
                        name="price"
                        placeholder="Price"
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

export default InputForm;