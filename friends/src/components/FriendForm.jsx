import React from 'react';

const FriendForm  = props => {
    return (
        <div>
            <form onSubmit={props.postFriend}>
                <input 
                    onChange={props.handleChanges} 
                    name="name" 
                    placeholder="Name" 
                    type="text" 
                    value={props.newFriend.name}
                />
                <input 
                    onChange={props.handleChanges}
                    name="age" 
                    placeholder="Age" 
                    type="text" 
                    value={props.newFriend.age}
                />
                <input 
                    onChange={props.handleChanges} 
                    name="email" 
                    placeholder="E-Mail" 
                    type="text" 
                    value={props.newFriend.email}
                />
                <input type='submit'/>
            </form>
        </div>
    )
}

export default FriendForm;