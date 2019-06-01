import React from 'react';

import './App.css';
import Box from './box'
import amine from './amine.PNG'
import yahya from './yahya.PNG'
import arsslen from './arsslen.PNG'
import sameh from './sameh.PNG'

function App() {
  return (
    <div className="App1">
      <Box img={yahya} nom="Yahya Bouhlel" des="founder CEO" gender="male" />
      <Box img={amine} nom="Amine Bouhlel" des="founder COO" />
      <Box img={arsslen} nom="Arsslen Idadi" des="software ENGINNER" gender="female" />
      <Box img={sameh} nom="Smaeh Ghanmi " des="Full time programme" />

    </div>
  );
}

export default App;
