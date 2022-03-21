import {  useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AboutPageBundler } from './BodyComponents/AboutPageComponents/AboutPageBundler';
import { HomePageController } from './BodyComponents/HomePageComponents/HomepageController';
import { FooterComponent } from './FooterComponent/FooterComponent';
import useLoginCache from './hooks/useLoginCache';
import useSetLoginCache from './hooks/useSetLoginCache';
import { NavigationBar } from './NavigationBar/NavigationBarHeader';
import { LoginOrSignUp } from './UserOperation/LoginOrSignUp';

function App() {

  useSetLoginCache();

  var [loginPopUpEffects, setLoginPopUpEffects] = useState({
    displayLoginPopUp: 'none',
    filter: 'none', // filter to give blur effect
    scroll: 'none', // make position fixed for position attribute
    pointerEvt: 'auto'
  });

  var [loggedUserDetails, setLoggedUserDetails] = useState({
    email:sessionStorage.getItem('email'),
    fname:sessionStorage.getItem('firstName'),
    lname:sessionStorage.getItem('lastName'),
    valid:sessionStorage.getItem('valid')
  });

  var [loginStatus, setLoginStatus] = useState(sessionStorage.getItem('valid'));

  useLoginCache(loggedUserDetails, setLoginStatus);

  return (
    <div className="App">
      <NavigationBar loginPopUpEffects={loginPopUpEffects} setLoginPopUpEffects={setLoginPopUpEffects}  loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>
      <LoginOrSignUp loginPopUpEffects={loginPopUpEffects} setLoginPopUpEffects={setLoginPopUpEffects} loggedUserDetails={loggedUserDetails} setLoggedUserDetails={setLoggedUserDetails} />
      <Routes>
        <Route path='/' element={<HomePageController loginPopUpEffects={loginPopUpEffects}/>}/>
        <Route path='/AboutUs' element={<AboutPageBundler loginPopUpEffects={loginPopUpEffects}/>}/>
      </Routes>
      <FooterComponent/>
    </div>
  );
}

export default App;
