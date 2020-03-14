import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import { NavBar } from '../components'

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/scores/list" exact component={ScoresList} />
        <Route path="/scores/create " exact component={ScoresInsert} />
        <Route path="/scores/update:id" exact component={ScoresUpdate} />

      </Switch>
    </Router>
  );
}

export default App
