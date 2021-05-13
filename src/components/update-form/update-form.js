import React, {Component} from 'react';
import Spinner from '../spinner';
import Error from '../error';


import Button from '@material-ui/core/Button';
import './update-form.css';

import WithService from '../hoc';
import {connect} from 'react-redux';

import {dataRequested, hideLoading, dataError} from '../../redux/actions';


class UpdateForm extends Component {
  state = {}

  componentDidMount() {
    this.props.dataRequested();

    const {Service, userId} = this.props;
    Service.getCustomer(userId)
      .then(res => {
        this.setState(res)
        this.props.hideLoading()
      })
      .catch(() => this.props.dataError());

  }

  componentDidCatch() {
    this.props.dataError()
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {Service, userId} = this.props;
    Service.updateCustomer(userId, this.state)
      .catch(() => this.props.dataError());
  }

  render() {
    const {name, phone, email, country, age} =  this.state;
    const {error, loading} = this.props;

    if (error) {
      return <Error/>
    }
    if (loading) {
      return <Spinner/>
    }

    return(
      <form onSubmit={this.onSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          type="text"
          id='name'
          value={name}
          name='name'
          onChange={this.handleChange}
          required
        /> <br/>

        <label htmlFor='phone'>Phone:</label>
        <input
          type="tel"
          id='phone'
          value={phone}
          name='phone'
          onChange={this.handleChange}
        /> <br/>

        <label htmlFor='email'>Email:</label>
        <input
          type="email"
          id='email'
          value={email}
          name='email'
          onChange={this.handleChange}
        /> <br/>

        <label htmlFor='country'>Country:</label>
        <select
          id='country'
          value={country}
          name='country'
          onChange={this.handleChange}
        >
          <option>Australia</option>
          <option>Russia</option>
          <option>USA</option>
        </select> <br/>

        <label htmlFor='age'>Age:</label>
        <input
          type="number"
          min="1"
          id='age'
          value={age}
          name='age'
          onChange={this.handleChange}
        /> <br/>

        <Button 
          className="form-button"
          type="submit"
          variant="contained"
          color="primary"
          tabIndex="-1"
        >
          Добавить
        </Button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = {
  dataRequested,
  hideLoading,
  dataError
}

export default WithService()(connect(mapStateToProps, mapDispatchToProps)(UpdateForm));