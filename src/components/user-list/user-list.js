import React, {Component} from 'react';
import UserListItem from '../user-list-item';
import Error from '../error';

import './user-list.css';
import Spinner from '../spinner';
import Button from '@material-ui/core/Button';


import {connect} from 'react-redux';
import WithService from '../hoc';
import {dataLoaded, hideLoading, dataRequested, dataError, deleteUser} from '../../redux/actions';


class UserList extends Component {

  componentDidMount() {
    this.props.dataRequested();
    
    const {Service} = this.props;
    Service.getAllCustomers()
      .then(res => this.props.dataLoaded(res))
      .catch(() => this.props.dataError());
  }

  deleteCustomer(id) {
    this.props.deleteUser(id)
    const {Service} = this.props;
    Service.deleteCustomer(id)
      .catch(() => this.props.dataError());

  }

  returnBd() {
    this.props.dataRequested();

    const {Service} = this.props;
    Service.getAllReserve()
      .then(res => {
        this.props.dataLoaded(res)
        res.forEach(user => {
          Service.postCustomer(user)
            .catch(() => this.props.dataError());
        });
      })
      .then(() => this.props.hideLoading())
      .catch(() => this.props.dataError());
  }

  render() {
    const {users, loading, error} = this.props;

    if (error) {
      return <Error/>
    }
    if (loading) {
      return <Spinner/>
    }

    const header = (users.length) ? (
      <div className='list-title'>
        <span>Name</span>
        <span>Phone</span>
        <span>Email</span>
        <span>Country</span>
        <span>Age</span>
      </div>
    ) : (
      <Button 
        variant="contained" 
        color="primary"
        onClick={() => this.returnBd()}
      >
        Return
      </Button>
    )

    return(
      <div className='list'>
        {header}
        <ul>
          {users.map((user) => <UserListItem 
            user={user} 
            key={user.id}
            deleteUser={() => this.deleteCustomer(user.id)}
            // findUser={() => findUser(user.id)}
          />)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.data,
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = {
  dataLoaded,
  hideLoading,
  dataRequested,
  dataError,
  deleteUser
}

export default WithService()(connect(mapStateToProps, mapDispatchToProps)(UserList));