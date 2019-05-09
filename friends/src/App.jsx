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
            },
            error: '',
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

    postFriend = event => {
        event.preventDefault();
        axios
            .post(`http://localhost:5000/friends`, this.state.newFriend)
                .then(res => {
                    console.log(res);
                    this.setState({
                        friends: res.data,
                        newFriend: {
                            name: '',
                            age: '',
                            email: ''
                        }
                    })
                })
                .catch(err => {
                    console.log(err);
                    this.setState({
                        postError: err
                    })
                })
    }

    deleteFriend = id => {
        axios
            .delete(`http://localhost:5000/friends/${id}`)
                .then(res => {
                    this.setState({
                        friends: res.data
                    })
                })
                .catch(err => {
                    console.log(err);
                    this.setState({
                        deleteError: err
                    })
                })
    }

    render() {
        return (
            <div className="App">
                <Friends 
                    friends={this.state.friends} 
                    deleteFriend={this.deleteFriend}
                />
                <FriendForm 
                    newFriend={this.state.newFriend}
                    handleChanges={this.handleChanges} 
                    postFriend={this.postFriend}
                />
            </div>
        )
    }
}

export default App;
