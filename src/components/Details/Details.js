import React from 'react';
import './Details.css';
import {Link, withRouter } from 'react-router-dom';
import { FaMobile, FaPhone, FaRegArrowAltCircleLeft} from 'react-icons/fa';
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
      <Link className="arrow-back" to="/directory"><FaRegArrowAltCircleLeft size="30" /></Link>
      <div className="detail-container">
        <img src={user.picture.large} style={{ width: 120, height: 120 }} />
        <h2>{user.name.first} {user.name.last}</h2>
        
        <h3><FaMobile color="grey" /> <span className="num">{user.cell}</span></h3>
        <h3><FaPhone color="grey"/> <span className="num">{user.phone}</span></h3>

      </div>
    </div>;
  }
}

export default withRouter(Details);
