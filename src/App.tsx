import React from "react";
import { Router, Switch, Route } from "react-router-dom"
import { createBrowserHistory } from 'history'
import Card from './components/Card/Card'
import logo from "./logo.svg";
import "./App.less";
import styles from "./components/Card/styles.module.less";

const history = createBrowserHistory()

function App() {
  return <Router history={history}>
    <Switch>
      <Route path="/home" component={Card}></Route>
    </Switch>
  </Router>
}

export default App;
