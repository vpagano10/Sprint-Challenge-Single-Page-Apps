import React from "react";
import styled from 'styled-components';

const MainImage = styled.img`
  margin: 0% 0% 0% 35%;
  border: 2px solid black;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <MainImage
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
