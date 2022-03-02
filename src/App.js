import React from 'react';
import { Nav, NavRoutes } from './components';

function App() {

  return (

    <div className="App">
      {/* {!removeMoodScreen ? <MoodSelection
                            screenState = {removeMoodScreen}
                            removeScreen = {setRemoveMoodScreen}
                            setMoodCategory = { setMoodCategory }
                          /> : ""
      } */}

      {/* {removeMoodScreen ? <Nav/> : ""}
      {removeMoodScreen ? <NavRoutes userMood = {moodCategory}/> : ""} */}
      <Nav/>
      <NavRoutes/>
    </div>

    //next stage: make routing work so mood selection works
  );
}

export default App;
