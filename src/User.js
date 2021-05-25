import React, { Component } from 'react'

export class User extends Component {
  render() {
    return (
      <li>{this.props.name}</li>
    )
  }
}

export default User;




import React, { Component } from 'react'
import UserFinder from './UserFinder'
import './index.css'

export class App extends Component {
  render() {
    return (
      <div className = 'me'>
        <UserFinder />
      </div>
    )
  }
}

export default App;
