import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Launch from "./components/card/launch.component";

//Styles - components
import { Globalstyle } from "./styles/Global.styles";
import {Container} from './styles/Container.styles';

function App() {
  return (
    <>
      <Router>
        <Globalstyle/>
        <Container>
        <Routes>
          <Route path="/" element={<Launch />} />
        </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
