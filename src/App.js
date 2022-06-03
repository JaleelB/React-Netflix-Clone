import React, { useContext } from 'react';
import { Nav, NavRoutes } from './components';
import { AuthenticationContext} from './authenticationContext/AuthenticateContext';
import {FullscreenPropsProvider} from './FullscreenPropsContext';


function App() {

  const {user} = useContext(AuthenticationContext);

  return (

      <FullscreenPropsProvider>
        <div className="App">
          { user ? <Nav /> : ''}
          <NavRoutes user={user}/>
        </div>
      </FullscreenPropsProvider>

  );
}

export default App;
