import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { ScoresList, ScoresUpdate, ScoresInsert } from "../pages"

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/score/list" exact component={ScoresList} />
        <Route path="/score/create" exact component={ScoresInsert} />
        <Route path="/score/update/:id" exact component={ScoresUpdate} />

      </Switch>
    </Router>
  );
}

export default App
