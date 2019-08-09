import React, { Component } from 'react';
import UserCard from './UserCard.js'

class GetUsers extends Component {

  state = {
    users: [], 
  }

  fetchUsers = () => {
    fetch(`http://localhost:5000/api/restricted/data`)
      // format the data.
      .then(response => {
        return response.json();
      })

      // set the state using the formatted data 
      .then(userData => this.setState({users: userData}))

      // check for unsuccessful fetch
      .catch(error => {
        console.log("The user's API is currently down.", error);
      });
  };

  componentDidMount() {
    this.fetchUsers(); 
    console.log("Users 1st render", this.state.users)
  };
    

  render() {
      return (
          <div className="user-card">
            <h2>Users</h2>
            {console.log("user data", this.state.users)}
            {this.state.users.map(user => (<UserCard props={user}/>))}
          </div>
      )
  }
}

export default GetUsers; 