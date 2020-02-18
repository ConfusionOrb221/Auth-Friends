import React, { Component } from 'react';
import {axiosWithAuth} from '../Utility/Utilities';

class AddFriends extends Component {
    state = {
        addFriend: {
            id:  Date.now,
            name: '',
            age: '',
            email: '',
        }
    };

    handleChange = e => {
        this.setState({
            addFriend: {
                ...this.state.addFriend, 
                [e.target.name]: e.target.value
            }}
        );
    }

    handleSumbit = e =>{
        e.preventDefault();

        if(this.state.name != '' && this.state.age != '' && this.state.email !=''){
            this.props.addFriend(this.state.addFriend)
            this.setState({
                addFriend: {
                    id: Date.now,
                    name: '',
                    age: '',
                    email: ''
                }
            })
        }
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSumbit}>
                Name:
                <input
                    type="text"
                    name="name"
                    value={this.state.addFriend.name}
                    onChange={this.handleChange}
                />
                Age:
                <input
                    type="text"
                    name="age"
                    value={this.state.addFriend.age}
                    onChange={this.handleChange}
                />
                Email:
                <input
                    type="text"
                    name="email"
                    value={this.state.addFriend.email}
                    onChange={this.handleChange}
                />
                <input 
                    type='submit'
                    value='Add Friend'    
                />
                </form>
            </div>
        );
    }
}

export default AddFriends;