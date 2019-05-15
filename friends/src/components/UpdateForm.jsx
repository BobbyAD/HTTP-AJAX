import React from 'react';

class UpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: this.props.friend
        }
    }

    update = event => {
        event.preventDefault();
        this.props.updateFriend(this.state.friend);
    }

    handleChanges = event => {
        this.setState({
            friend: {
                ...this.state.friend,
                [event.target.name]: event.target.value
            }
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.update}>
                    <input 
                        onChange={this.handleChanges} 
                        name="name" 
                        placeholder="Name" 
                        type="text" 
                        value={this.state.friend.name}
                    />
                    <input 
                        onChange={this.handleChanges}
                        name="age" 
                        placeholder="Age" 
                        type="text" 
                        value={this.state.friend.age}
                    />
                    <input 
                        onChange={this.handleChanges} 
                        name="email" 
                        placeholder="E-Mail" 
                        type="text" 
                        value={this.state.friend.email}
                    />
                    <input
                        type="submit"
                        value="submit"
                    />
                </form>
            </div>
        )
    }
}

export default UpdateForm;