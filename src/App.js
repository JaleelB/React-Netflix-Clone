import React, {useState} from 'react';
import { Nav, NavRoutes } from './components';
import {FullscreenPropsProvider} from './FullscreenPropsContext';
import StoryCardPage from './Webpages/StoryCardPage/StoryCardPage.jsx'

function App() {

  const [isLogin, setIsLogin] = useState(true);

  return (

      isLogin ? <StoryCardPage setIsLogin={setIsLogin}/>

      :

      <FullscreenPropsProvider>
        <div className="App">
          <Nav />
          <NavRoutes />
        </div>
      </FullscreenPropsProvider>

  );
}

export default App;
