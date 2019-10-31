import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tab from "@material-ui/core/Tab";

class MenuBar extends React.Component {
    render() {
        return (
            <div>
                <AppBar position={"static"}>
                    <Toolbar>
                        <Typography variant={"title"} color={"inherit"}>
                            ShoeRec
                        </Typography>
                        <Tab label={"Questionnaire"} href={"/questionnaire"}/>
                        <Tab label={"Inventory"} href={"/inventory"}/>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default MenuBar;