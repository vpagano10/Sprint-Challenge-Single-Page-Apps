import React from "react";
import Header from "./components/Header.js";
import {Route} from 'react-router-dom';
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from './components/CharacterList';


export default function App() {
  return (
    <>
      <main>
        <Header />
      </main>
      <div>
        <Route exact path='/' component={WelcomePage} />
        <Route exact path='/characters' component={CharacterList} />
      </div>
    </>
  );
}
