import React from "react";
import styled from "styled-components";
import Products from "../components/Products";

const Container = styled.div`
  display: flex;
  min-height: 92vh;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Home = () => {
  return (
    <>
      <Container>
        <Products />
      </Container>
    </>
  );
};

export default Home;
