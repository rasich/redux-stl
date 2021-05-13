import React, {Component} from 'react';
import HeaderButtonsBlock from '../header-buttons-block';

import { Box } from '@material-ui/core';

import './app-header.css';

import WithService from '../hoc';
import {connect} from 'react-redux';
import { withRouter } from "react-router";
import {sortUsers, dataError, dataRequested, hideLoading, deleteAllUsers} from '../../redux/actions';



class AppHeader extends Component {
  state = {}

  onSort() {
    this.props.dataRequested();

    const {Service, users} = this.props;
    Service.getAllCustomers()
      .then((res) => {
        users.forEach(user => {
          Service.deleteCustomer(user.id)
            .catch(() => this.props.dataError());
        });
        this.props.deleteAllUsers();
        return res
      })
      .then((res) => {
        this.props.sortUsers(res);

        users.forEach(user => {
          Service.postCustomer(user)
            .catch(() => this.props.dataError());
        });
      })
      .then(() => this.props.hideLoading())
      .catch(() => this.props.dataError());
  }
  
  render() {
    const {users, location} = this.props;

    const pathname = (location.pathname === '/');
    const length = (users.length);
    const title = (pathname) ? 
    (length) ? 'List' : 'Empty List' 
    : 'Update';
    
    return (
      <Box  bgcolor="secondary.main" className="header">
        <h1>{title}</h1>
        <HeaderButtonsBlock
          pathname={pathname}
          length={length}
          onSort={() => this.onSort()}
        />
      </Box>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.data
  }
}

const mapDispatchToProps = {
  sortUsers,
  dataError,
  dataRequested,
  hideLoading,
  deleteAllUsers
}

export default WithService()(withRouter(connect(mapStateToProps, mapDispatchToProps)(AppHeader)));