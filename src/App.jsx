import styled from "styled-components";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import "./global.css"
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { useState } from "react";

const Container = styled.div`
    height: 100vh;
    width:100%;
    scroll-snap-align: start;
    scrollbar-width: none;
    &::-webkit-scrollbar{
      display: none;
    }
    `

function App() {
  const [active,setActive] = useState(false)
  return (
    <>
      <Container>
        <Navbar active={active} setActive={setActive}/>
        <Intro />
      </Container>
      <Container>
        <About />
      </Container>
      <Container>
        <Services />
      </Container>
      <Container>
        <Contact />
      </Container>
    </>
  )
}

export default App;

