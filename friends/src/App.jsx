import React from "react";
import axios from 'axios';

import logo from "./logo.svg";
import "./App.css";
import Friends from "./components/Friends.jsx";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(res => {
                console.log(res);
                this.setState({ friends: res.data });
            })
            .catch(err => {
                console.log(err);
                this.setState({ error: err.response.message });
            });
    }

    render() {
        return (
            <div className="App">
                <Friends friends={this.state.friends}/>
            </div>
        )
    }
}

export default App;
