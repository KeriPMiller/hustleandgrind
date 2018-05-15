import React, {Component} from "react";

// imported Components
import Calendar from "./Calendar";
import Header from "./Header";

// imported styled components
import {CenterDiv} from "../assets/styledComponents/";

class App extends Component {
    render() {
        return (
            <CenterDiv>
                <Header/>
                <p>An easier way to schedule coffee chats!</p>
                <Calendar/>
            </CenterDiv>
        );
    }
}

export default App;
