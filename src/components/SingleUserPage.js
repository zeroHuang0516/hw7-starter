import React, { Component, PropTypes } from 'react';


class SingleUserPage extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };
  constructor(){
    super();
    this.state={
      users:{},
    };
  }

  componentDidMount() {
    // fetch `/api/users/${id}` to get user and then set state...
    fetch(`/api/users/${this.props.id}`)
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
    return <div>
              <div>User {this.props.id}</div>;
              <div>Avatar {this.state.users.avatar}</div>;
              <div>Age {this.state.users.age}</div>;
           </div>
  }
}

export default SingleUserPage;
