import React, { Component } from 'react';
import {axiosWithAuth} from '../Utility/Utilities';
import AddFriends from './AddFriends';
class FriendsList extends Component {
    state = {
        friends: [],
    };

    getData = () =>{
        axiosWithAuth()
            .get('/api/friends')
            .then(res =>{
                this.setState({
                    friends: res.data
                });
            })
            .catch(err => console.log(err));
    }

    componentDidMount(){
        this.getData();
    }

    AddFriend = friend => {
        axiosWithAuth()
        .post('/api/friends', friend)
        .then(res => this.getData())
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
               <AddFriends addFriend={this.AddFriend} />
                {this.state.friends.map(obj =>(
                    <div key ={obj.id}>
                    <p>id: {obj.id}</p>
                    <p>Name: {obj.name}</p>
                    <p>Age: {obj.age}</p>
                    <p>Email: {obj.email}</p>
                  </div>
                ))}
            </div>
        );
    }
}

export default FriendsList;