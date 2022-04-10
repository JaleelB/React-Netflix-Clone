import React, { useState } from 'react';
import { Nav, NavRoutes } from './components';

function App() {

  const [isLoading, setIsLoading] = useState(true);
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
  // const [sectionTitle, setSectionTitle] = useState('')
  const [genreTitle, setGenreTitle] = useState('');
  const [genreID, setGenreID] = useState(null);


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
      mediaType, setMediaType,
      // sectionTitle, setSectionTitle,
      genreTitle, setGenreTitle,
      genreID, setGenreID,
      isLoading, setIsLoading
  };

  return (

    <div className="App">
      <Nav fullscreenProps={fullscreenProps}/>
      <NavRoutes fullscreenProps={fullscreenProps}/>

    </div>

  );
}

export default App;
