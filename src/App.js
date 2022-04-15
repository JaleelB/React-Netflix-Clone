import React from 'react';
import { Nav, NavRoutes } from './components';
import {FullscreenPropsProvider} from './FullscreenPropsContext';
import {RowPropsProvider} from './RowPropsContext';

function App() {


  return (
    <FullscreenPropsProvider>
      {/* <RowPropsProvider> */}
            <div className="App">
              <Nav />
              <NavRoutes />
            </div>
        {/* </RowPropsProvider> */}
    </FullscreenPropsProvider>

  );
}

export default App;
