import React from "react";
import axios from 'axios';

import logo from "./logo.svg";
import "./App.css";
import Friends from "./components/Friends.jsx";
import FriendForm from "./components/FriendForm.jsx";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: [],
            newFriend: {
                name: '',
                age: '',
                email: '',
                
            }
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

    handleChanges = event => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [event.target.name]: event.target.value
            }
        })
    }

    render() {
        return (
            <div className="App">
                <Friends friends={this.state.friends}/>
                <FriendForm handleChanges={this.handleChanges}/>
            </div>
        )
    }
}

export default App;
