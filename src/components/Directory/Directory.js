import React from 'react';
import './Directory.css';
import { Link, withRouter } from 'react-router-dom';
import { getUsers } from '../../services/phonebook.service';
import { FaSearch, FaList, FaTh } from 'react-icons/fa';

class Directory extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {
      users: [],
      usersCopy: [],
      isGrid: true
    }

    this.handleChange = this.handleChange.bind(this);
  }

  

  async componentDidMount() {
    try {
      const response = await getUsers();
      const json = await response.json();
      // Sort users alphabetically
      const sortedUsers = json.results.sort((a,b)=> {
        return a.name.first + a.name.last < b.name.first + b.name.last ? -1 : 1;
      });
      this.setState({ users: sortedUsers, usersCopy: sortedUsers});
    } catch (error) {
      console.log(error);
    }
  }

  handleChange(event) {
    const searchTerm = event.target.value.toLowerCase();
    const  users = this.state.usersCopy.filter(user=> {
        return user.name.first.toLowerCase().startsWith(searchTerm);
      });
    this.setState({users});
  }

  navigateToDetails(user) {
    this.props.history.push({
      pathname: '/details',
      state: {
        user
      }
    })

  }

  switchListView() {
    this.setState({isGrid: !this.state.isGrid});
  }



  render() {
    const {users, isGrid} = this.state;
    return <div>
            <h1>Contacts</h1>
            <div className="input-container">
              <input name="search" onChange={this.handleChange} placeholder="Search Contact..." />
              <FaSearch color="grey" />
            </div>
            <div className="grid-button-container">
              { isGrid ? <FaList color="grey" onClick={()=> this.switchListView()} /> : <FaTh color="grey" onClick={()=> this.switchListView()}/>}
            </div>
            
            <div className={isGrid? 'users-container-grid' : 'users-container-list'}>
              {users.map((user, index)=>(
                <div className="user" key={index} onClick={() => this.navigateToDetails(user)}>
                  <img src={user.picture.large} style={{ width: 60, height: 60 }} />
                  <div className="title">{user.name.first} {user.name.last}</div>
                </div>
              ))}
            </div>
          </div>;
  }
}

export default withRouter(Directory);
