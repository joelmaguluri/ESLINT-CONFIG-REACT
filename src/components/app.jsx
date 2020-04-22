import React from "react";
import styled from "styled-components";
import mainBackground from "../assets/images/main_background.jpg";

const Image = styled.div`
  background-image: url(${mainBackground});
  /* Full height */
  height: 100vh;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const App = () => <Image />;

export default App;
