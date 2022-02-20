import React from 'react';
import { useState } from 'react';
import MoodSelection from './Webpages/MoodSelection/MoodSelection';
import Nav from './components/Navbar/Nav';
import Hero from './Webpages/Hero/Hero';

function App() {

  const [removeMoodScreen, setRemoveMoodScreen] = useState(false);

  return (
    <div className="App">
      {!removeMoodScreen ? <MoodSelection
                            screenState = {removeMoodScreen}
                            removeScreen = {setRemoveMoodScreen}
                          /> : ""
      }

      {removeMoodScreen ? <Nav/> : ""}
      {removeMoodScreen ? <Hero/> : ""}
      
    </div>
  );
}

export default App;
