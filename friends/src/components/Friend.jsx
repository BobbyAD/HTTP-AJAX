import React from 'react';

class Friend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            friend: props.friend
        }
    }

    deleteFriend = event => {
        event.preventDefault();
        this.props.deleteFriend(this.state.friend.id);
    }

    render() {
        return (
            <div>
                <h1>{this.state.friend.name}</h1>
                <h2>{this.state.friend.age}</h2>
                <h3>{this.state.friend.email}</h3>
                <button onClick={this.deleteFriend}>X</button>
            </div>
        )
    }
}

export default Friend;