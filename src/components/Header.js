import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import styled from 'styled-components';

const LinkDiv = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
`;
const TopLinks = styled.p`
  color: black;
  padding 2%;
  margin: 2%;
`;

export default function Header() {
  return (
    <Router>
      <div>
        <header className="ui centered">
          <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
        </header>
        <LinkDiv>
          <TopLinks>
            <Link to='/'>Home</Link>
          </TopLinks>
          <TopLinks>
            <Link to='/characters'>Characters</Link>
          </TopLinks>
        </LinkDiv>
        <Switch>
          <Route exact path='/' component={WelcomePage} />
          <Route exact path='/characters' component={CharacterList} />
        </Switch>
      </div>
    </Router>
  );
}
