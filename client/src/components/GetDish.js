import React, { Component } from 'react';
import DishCard from './DishCard.js'

class GetDish extends Component {

  state = {
    dish: [], 
    likes: 0, 
  }

  likeCount = () => {
    this.setState({likes: this.state.likes + 1})
  };

  fetchUsers = () => {
    fetch(`http://localhost:5000/api/restricted/data`)
      // format the data.
      .then(response => {
        return response.json();
      })

      // set the state using the formatted data 
      .then(dishData => this.setState({dish: dishData}))

      // check for unsuccessful fetch
      .catch(error => {
        console.log("The user's API is currently down.", error);
      });
  };

  componentDidMount() {
    this.fetchUsers(); 
    console.log("Users 1st render", this.state.dish)
  };
    

  render() {
      return (
          <div className="user-card">
            <h2 data-testid="leaveLikes">Leave a like for these dishes!</h2>
            <div className="likes-container">
              <button onClick={this.likeCount} data-testid="likeButton">Like 👍</button>
              <p data-testid="likes">{this.state.likes}</p>
            </div>
           
            {console.log("user data", this.state.dish)}
            {this.state.dish.map(meal => (<DishCard props={meal}/>))}
          </div>
      )
  }
}

export default GetDish; 