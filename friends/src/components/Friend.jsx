import React from 'react';
import UpdateForm from './UpdateForm';

const Friend = props => {
    function deleteFriend() {
        props.deleteFriend(props.friend.id);
    }
    return (
        <div>
            <h1>{props.friend.name}</h1>
            <h2>{props.friend.age}</h2>
            <h3>{props.friend.email}</h3>
            <button onClick={deleteFriend}>X</button>
            <UpdateForm friend={props.friend} updateFriend={props.updateFriend} />
        </div>
    )
}

export default Friend;