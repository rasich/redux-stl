import React from 'react';
import {Switch, Route} from "react-router-dom";

import {Paper} from '@material-ui/core';
import Container from '@material-ui/core/Container';

import AppHeader from '../app-header';
import UserList from '../user-list';
import UpdateForm from '../update-form';

import './app.css';

const App = () => {
  return (
    <div className="App">
      <Paper className="main-paper" elevation={3}>
        <AppHeader/>

        <Container>
          <Switch>
            <Route path="/" exact component={UserList}/>
            <Route path="/details/:id" render={
              ({match}) => {
                const {id} = match.params;
                return <UpdateForm userId={id}/>
              }
            }/>
            <Route path="/*" component={Error}/>
          </Switch>
        </Container>
      </Paper>
    </div>
  )
}

export default App;