import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AboutPageBundler } from './BodyComponents/AboutPageComponents/AboutPageBundler';
import { HomePageController } from './BodyComponents/HomePageComponents/HomepageController';
import { FooterComponent } from './FooterComponent/FooterComponent';
import { NavigationBar } from './NavigationBar/NavigationBarHeader';
import { LoginOrSignUp } from './UserOperation/LoginOrSignUp';

function App() {

  if(sessionStorage.getItem('email') === null){
    sessionStorage.setItem('email','');
    sessionStorage.setItem('firstName','');
    sessionStorage.setItem('lastName','');
    sessionStorage.setItem('valid',false);
  }

  var [displaylogin, setlogin] = useState('none');
  var [filter, setFilter] = useState('none');
  var [scroll, setscroll] = useState('none');
  var [pointerEvt, setPointerEvt] = useState('auto');
  var [loggedUserDetails, setLoggedUserDetails] = useState({email:sessionStorage.getItem('email'),fname:sessionStorage.getItem('firstName'),lname:sessionStorage.getItem('lastName'),valid:sessionStorage.getItem('valid')});
  var [loginStatus, setLoginStatus] = useState(sessionStorage.getItem('valid'));

  useEffect(() => {
    console.log(loggedUserDetails);
    if(loggedUserDetails.valid){
      sessionStorage.setItem('email',loggedUserDetails.email);
      sessionStorage.setItem('firstName',loggedUserDetails.fname);
      sessionStorage.setItem('lastName',loggedUserDetails.lname);
      sessionStorage.setItem('valid', loggedUserDetails.valid);
      if(loggedUserDetails.email !== ''){
        setLoginStatus(true);
      }
    }
  },[loggedUserDetails,sessionStorage])

  return (
    <div className="App">
      <NavigationBar setLogin={setlogin} getFilter={filter} setFilter={setFilter} setscroll={setscroll} pointerEvt={pointerEvt}  setPointerEvt={setPointerEvt} loginStatus={loginStatus}/>
      <LoginOrSignUp setLogin={setlogin} getLogin={displaylogin} setFilter={setFilter} setscroll={setscroll} setPointerEvt={setPointerEvt} loggedUserDetails={loggedUserDetails} setLoggedUserDetails={setLoggedUserDetails} />
      <Routes>
        <Route path='/' element={<HomePageController getFilter={filter} scroll={scroll} pointerEvt={pointerEvt} setPointerEvt={setPointerEvt}/>}/>
        <Route path='/AboutUs' element={<AboutPageBundler/>}/>
      </Routes>
      <FooterComponent/>
    </div>
  );
}

export default App;
