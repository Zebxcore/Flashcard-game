import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import KANJI from './assets/kanji.json';
import { ControlPanel } from './components/ControlPanel';
import { DisplayCard } from './components/DisplayCard';

function App(): JSX.Element {
  return (
    <div className="App">
      <h1> Welcome to the Kanji Learning Flashcard game!</h1>

      <DisplayCard></DisplayCard>
      <ControlPanel></ ControlPanel>

    </div>
  );
}

export default App;
