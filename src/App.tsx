import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import KANJI from './assets/kanji.json';
import { ControlPanel } from './components/ControlPanel';
import { DisplayCard } from './components/DisplayCard';
import { Container, Row } from 'react-bootstrap';
import { Intro } from './components/Description';
import { Card } from './interfaces/card';

function App(): JSX.Element {

  const [activeCard, setActiveCard] = useState<Card>(KANJI[0]);

  return (

    <Container className="App">

      <h1> Welcome to the Kanji Learning Flashcard game!</h1>

      <Intro></Intro>

      <Container>
        <DisplayCard card = {activeCard}></DisplayCard>
      </Container>

      <Row>
        <ControlPanel setCard = {setActiveCard}></ ControlPanel>
      </Row>
    </Container>
  );
}

export default App;
