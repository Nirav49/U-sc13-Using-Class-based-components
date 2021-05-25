
import { Fragment, useState, useEffect, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import Usercontext from './User-context';
import ErrorBoundary from './ErrorBoundary'

class UserFinder extends Component {
  static contextType = Usercontext;
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  componentDidMount() {
    // Send http request...
    this.setState({ filteredUsers: this.context.users });

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchs !== this.state.searchs) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchs)
        ),
      });
    }

  }

  searchChangeHandler(event) {
    this.setState({ searchs: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}
export default UserFinder;