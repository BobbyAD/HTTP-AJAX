import React from 'react';

const FriendForm  = props => {
    return (
        <div>
            <form>
                <input onChange={props.handleChanges} name="name" placeholder="Name" type="text" />
                <input onChange={props.handleChanges} name="age" placeholder="Age" type="text" />
                <input onChange={props.handleChanges} name="email" placeholder="E-Mail" type="text" />
            </form>
        </div>
    )
}

export default FriendForm;