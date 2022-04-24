import React, {useState} from 'react';
import { Nav, NavRoutes } from './components';
import {FullscreenPropsProvider} from './FullscreenPropsContext';
import RegisterPage from './Webpages/Register/RegisterPage.jsx'
// import LoginPage from './Webpages/LoginPage/LoginPage';

function App() {

  const [isLogin, setIsLogin] = useState(true);

  return (

      isLogin ? <RegisterPage setIsLogin={setIsLogin}/>
      // isLogin ? <LoginPage/>

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
