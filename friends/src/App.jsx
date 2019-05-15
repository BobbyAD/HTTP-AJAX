import React from "react";
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

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

    updateFriend = update => {
        axios
            .put(`http://localhost:5000/friends/${update.id}`, update)
                .then(res => {
                    console.log(res);
                    this.setState({
                        friends: res.data
                    })
                })
                .catch(err => {
                    console.log(err)
                    this.setState({
                        updateError: err
                    })
                })
    }

    render() {
        return (
            <div className="App">
                <div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/new-friend">Add New Friend</NavLink>
                </div>
                <Route exact path="/" render={() => <Friends 
                    friends={this.state.friends} 
                    deleteFriend={this.deleteFriend}
                    updateFriend={this.updateFriend}
                />} />
                <Route exact path="/new-friend" render={() => <FriendForm 
                    newFriend={this.state.newFriend}
                    handleChanges={this.handleChanges} 
                    postFriend={this.postFriend}
                />} />
            </div>
        )
    }
}

export default App;