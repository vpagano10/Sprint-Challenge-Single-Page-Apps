// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import styled from 'styled-components';
// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

// const CharacterCard = styled.div`
//   border: 2px solid black;
//   background-color: slategrey;
//   color: navy;
//   width: 20%;
//   padding: 2%;
//   margin: 2%;
//   &:hover {
//     background-color: dodgerblue;
//     color: navy;
//     transform: scale(1.2);
//   }
// `;
// const CardArea = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
// `;
// const Topic = styled.big`
//   color: firebrick;
// `;
// const Form = styled.form`
//   margin: 0% 0% 0% 41%;
// `;
// const Input = styled.input`
//   width: 25%;
//   padding: 2%;
//   border: 2px solid black;
// `;

// export default function CharacterListTwo() {
//   // TODO: Add useState to track data from useEffect
//     const [charactersTwo, setCharactersTwo] = useState([]);
//     const [queryTwo, setQueryTwo] = useState('');
//     const [filteredCharactersTwo, setFilteredCharactersTwo] = useState([]);

//   useEffect(() => {
//     // TODO: Add API Request here - must run in `useEffect`
//     //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
//     axios
//       .get('https://rickandmortyapi.com/api/character/?page=2')
//       .then(response => {
//         console.log(response.data);
//         setCharactersTwo(response.data.results);
//         setFilteredCharactersTwo(response.data.results);
//       })
//       .catch(error => {
//         console.log('Data not found', error)
//       });
//   }, []);

//   useEffect(() => {
//     setFilteredCharactersTwo(
//       charactersTwo.filter(character =>
//         character.name.toLowerCase().includes(queryTwo.toLowerCase())
//       )
//     );
//   }, [queryTwo]);

//   const handleInputChange = event => {
//     setQueryTwo(event.target.value);
//   };


//   if (!charactersTwo) {
//     return (
//       <h1>Loading...</h1>
//     );
//   }
//   if (charactersTwo) {
//   return (
//     <section className="character-list">
//       <Form>
//         <Input
//         type='text'
//         onChange={handleInputChange}
//         value={queryTwo}
//         name='name'
//         tabIndex='0'
//         placeholder='search by name'
//         autoComplete='off'
//         />
//       </Form>
//       <Router>
//         <Link to='/characters'>Back</Link>
//         <Switch>
//           <Route exact path='/characters' component={CharacterListTwo} />
//         </Switch>
//       </Router>
//       <CardArea>
//         {filteredCharactersTwo.map(data => (
//           <CharacterCard key={data.id}>
//             <p><Topic>Name: </Topic>{data.name}</p>
//             <p><Topic>Status: </Topic>{data.status}</p>
//             <p><Topic>Species: </Topic>{data.species}</p>
//           </CharacterCard>
//         ))}
//       </CardArea>
//     </section>
//   )};
// }
