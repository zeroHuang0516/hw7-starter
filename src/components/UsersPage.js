import React, { Component } from 'react';


class UsersPage extends Component {
  constructor(){
    super();
    this.state={
      users:[],
    };
  }
  componentDidMount() {
    // fetch `/api/users` to get users and then set state...
    fetch(`/api/users`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        this.setState({
          users: json
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.users.map((key, idx)=>
          <li><a href="#/users/${idx+1}">key.name</a></li>
          )
        }
      </div>
    );
  }
}

export default UsersPage;
