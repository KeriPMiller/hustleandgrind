import React, {Component} from "react";
import {css} from "emotion";
import {FlexDiv} from "../assets/styledComponents";
// imported Components
import Calendar from "./Calendar";
import Header from "./Header";
import TimeSelect from "./TimeSelect";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className={css `padding-left:1rem; display`}>
                    <p>An easier way to schedule coffee chats!</p>
                    <FlexDiv>
                        <Calendar/>
                        <TimeSelect/>
                    </FlexDiv>
                </div>
            </div>
        );
    }
}

export default App;
