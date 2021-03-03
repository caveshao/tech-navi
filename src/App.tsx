import React from "react";
import { Router, Switch, Route } from "react-router-dom"
import { createBrowserHistory } from 'history'
import HomePage from '@/pages/HomePage'
import "./App.less";

const history = createBrowserHistory()

function App() {
  return <Router history={history}>
    <Switch>
      <Route path="/home" component={HomePage}></Route>
    </Switch>
  </Router>
}

export default App;
