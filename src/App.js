import React, { useState, useEffect } from 'react';
import { Nav, NavRoutes } from './components';

function App() {

  const [fullscreenPlayer, setFullscreenPlayer] = useState(false);
  const[fullVideoPath, setFullVideoPath] = useState('');
  const [posterID, setPosterID] = useState(0);
  const [netflixOriginalShow, setNetflixOriginalShow] = useState(false);

  const [openFullscreenPopup, setOpenFullscreenPopup] = useState(false);
  const [movie, setMovie] = useState([]);
  const [movieCredits, setMovieCredits] = useState([]);
  const [similiarMovies, setSimiliarMovies] = useState([]);
  const [disablePointer, setDisablePointer] = useState(false);
  const [mediaType, setMediaType] = useState('');

  const [volume, setVolume] = useState(1);


  const fullscreenProps = {
      fullscreenPlayer, setFullscreenPlayer,
      fullVideoPath, setFullVideoPath,
      posterID, setPosterID,
      openFullscreenPopup, setOpenFullscreenPopup,
      movie, setMovie, movieCredits, setMovieCredits,
      similiarMovies, setSimiliarMovies,
      disablePointer, setDisablePointer,
      netflixOriginalShow, setNetflixOriginalShow,
      volume, setVolume,
      mediaType, setMediaType
  };

  return (

    <div className="App">
      <Nav fullscreenProps={fullscreenProps}/>
      <NavRoutes fullscreenProps={fullscreenProps}/>

    </div>

  );
}

export default App;
