import React from 'react';
import { useState } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import MoodSelection from './Webpages/MoodSelection/MoodSelection';
import Nav from './components/Navbar/Nav';
import NavRoutes from './components/Navbar/NavRoutes';
// import Hero from './Webpages/Hero/Hero';

function App() {

  const [removeMoodScreen, setRemoveMoodScreen] = useState(false);
  const [moodCategory, setMoodCategory] = useState('');

  return (

    <div className="App">
      {!removeMoodScreen ? <MoodSelection
                            screenState = {removeMoodScreen}
                            removeScreen = {setRemoveMoodScreen}
                            setMoodCategory = { setMoodCategory }
                          /> : ""
      }

      {removeMoodScreen ? <Nav/> : ""}
      {removeMoodScreen ? <NavRoutes userMood = {moodCategory}/> : ""}
      {/* <Hero
          mood = {moodCategory}
        /> */}
    </div>

    //next stage: make routing work so mood selection works
  );
}

export default App;
