import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';
// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
// import CharacterListTwo from './CharacterList2';

const CharacterCard = styled.div`
  border: 2px solid black;
  background-color: slategrey;
  color: navy;
  width: 20%;
  padding: 2%;
  margin: 2%;
  &:hover {
    background-color: dodgerblue;
    color: navy;
    transform: scale(1.2);
  }
`;
const CardArea = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Topic = styled.big`
  color: firebrick;
`;
const Form = styled.form`
  margin: 0% 0% 0% 41%;
`;
const Input = styled.input`
  width: 25%;
  padding: 2%;
  border: 2px solid black;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
    const [characters, setCharacters] = useState([]);
    const [query, setQuery] = useState('');
    const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data);
        setCharacters(response.data.results);
        setFilteredCharacters(response.data.results);
      })
      .catch(error => {
        console.log('Data not found', error)
      });
  }, []);

  useEffect(() => {
    setFilteredCharacters(
      characters.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };


  if (!characters) {
    return (
      <h1>Loading...</h1>
    );
  }
  if (characters) {
  return (
    <section className="character-list">
      <Form>
        <Input
        type='text'
        onChange={handleInputChange}
        value={query}
        name='name'
        tabIndex='0'
        placeholder='search by name'
        autoComplete='off'
        />
      </Form>
      {/* <Router>
        <Link to='/characters/2'>Next</Link>
        <Switch>
          <Route exact path='/characters/2' component={CharacterListTwo} />
        </Switch>
      </Router> */}
      <CardArea>
        {filteredCharacters.map(data => (
          <CharacterCard key={data.id}>
            <p><Topic>Name: </Topic>{data.name}</p>
            <p><Topic>Status: </Topic>{data.status}</p>
            <p><Topic>Species: </Topic>{data.species}</p>
          </CharacterCard>
        ))}
      </CardArea>
    </section>
  )};
}
