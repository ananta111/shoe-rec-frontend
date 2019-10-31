import React, {Component} from 'react';
import InputForm from "./components/InputForm";
import MenuBar from "./components/MenuBar";
import {Route, BrowserRouter} from "react-router-dom"
import Questionnaire from "./components/Questionnaire";
import Results from "./components/Results";
class App extends React.Component {



  render() {
    return (
        <div>
          <MenuBar/>
          <BrowserRouter>
              <Route path="/inventory" component={InputForm} />
              <Route path="/questionnaire" component={Questionnaire} />
              <Route path="/results" component={Results} />
          </BrowserRouter>
        </div>
    )
  }
}

export default App;
