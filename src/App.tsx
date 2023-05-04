import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Charts from "./components/pages/Charts";
import Settings from "./components/pages/Settings";
import Navigation from "./components/Navigation";
import styled from "@emotion/styled";
import categories from "./libs/categories";
import Addictions from "./components/pages/Addictions";

const Container = styled.div`
  padding-top: 50px;
  max-width: 300px;
  width: 100%;
  height: 70vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Home categories={categories} />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/addictions" element={<Addictions />} />
          </Routes>
          <Navigation />
          
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
