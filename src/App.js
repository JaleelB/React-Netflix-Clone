import React from 'react';
import { useState } from 'react';
import MoodSelection from './Webpages/MoodSelection/MoodSelection';
import Nav from './components/Navbar/Nav';
import Hero from './Webpages/Hero/Hero';

function App() {

  const [removeMoodScreen, setRemoveMoodScreen] = useState(false);
  const [moodCategory, setMoodCategory] = useState('');
  // const [moodCategoryIds, setMoodCategoryIds] = useState([]);

  // useEffect(() => {
    
  //   switch(moodCategory){
  //     case "Love, Family & Laughter":
  //       setMoodCategoryIds(35, 16, 10751, 10749, 10402,10762);
  //       break;

  //     case "Fantasy":
  //       setMoodCategoryIds(14,10765);
  //       break;

  //     case "Discovery & Exploration":
  //       setMoodCategoryIds(878,99,9648,36,10763);
  //       break;

  //     case "Drama":
  //       setMoodCategoryIds(18,10766,10767,10764);
  //       break;

  //     case "Thriller & Suspense":
  //       setMoodCategoryIds(28,12,10759,27,80,10752,10768,37,53);
  //       break;
      
  //     default:
  //       setMoodCategoryIds('');
  //       break;
  //   }

  //   console.log(moodCategory);
  //   console.log(moodCategoryIds);

  // }, [moodCategory, moodCategoryIds]);


  return (
    <div className="App">
      {!removeMoodScreen ? <MoodSelection
                            screenState = {removeMoodScreen}
                            removeScreen = {setRemoveMoodScreen}
                            setMoodCategory = { setMoodCategory }
                            // setMediaCategories = {setMediaCategories}
                          /> : ""
      }

      {removeMoodScreen ? <Nav/> : ""}
      {/* {removeMoodScreen ? <Hero/> : ""} */}
      <Hero
        mood = {moodCategory}
      />
    </div>
  );
}

export default App;
