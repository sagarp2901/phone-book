import React from 'react';
import './Details.css';
import {Link, withRouter, } from 'react-router-dom';

class Details extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: this.props.location.state.user
    }
  }
  render() {
    const {user} = this.state;
    return <div>
      <h1>Details</h1>
      <Link to="/directory">Back</Link>
      <div className="detail-container">
        <div>{user.name.first}</div>

      </div>
    </div>;
  }
}

export default withRouter(Details);
