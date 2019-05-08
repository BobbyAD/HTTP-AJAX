import React from 'react';

import Friend from './Friend.jsx';

const Friends = props => {
    return (
        <>
            {props.friends.map(friend => (
                <Friend friend={friend} key={friend.id} />
            ))}
        </>
    )
}

export default Friends;