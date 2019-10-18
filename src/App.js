import React from "react";
import Header from "./components/Header.js";
import styled from 'styled-components';

const MainSection = styled.main`
  background-color: lightblue;
  border: 2px solid black;
`;

export default function App() {
  return (
    <>
      <MainSection>
        <Header />
      </MainSection>
    </>
  );
}
