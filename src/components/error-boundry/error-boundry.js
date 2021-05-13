import React, {Component} from 'react';
import Error from '../error';
import './error-boundry.css';

export default class ErrorBoundry extends Component {
  state = {
    error: false
  }

  componentDidCatch() {
    this.setState({error: true})
  }

  render() {
    if(this.state.error) {
      return (
        <div className="error-boundry">
          <Error/>
        </div>
      )
    }
    return this.props.children;
  }
}