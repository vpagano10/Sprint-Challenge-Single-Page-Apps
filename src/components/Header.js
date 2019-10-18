import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

export default function Header() {
  return (
    <Router>
      <div>
        <header className="ui centered">
          <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
        </header>
        <div>
          <p>
            <Link to='/'>Home</Link>
          </p>
          <p>
            <Link to='/characters'>Characters</Link>
          </p>
        </div>
        <Switch>
          {/* <Route exact path='/' component={} /> */}
        </Switch>
      </div>
    </Router>
  );
}
