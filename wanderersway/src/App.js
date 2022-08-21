import {  useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { FooterComponent } from './FooterComponent/FooterComponent';
import useLoginCache from './hooks/useLoginCache';
import useSetLoginCache from './hooks/useSetLoginCache';
import { RootNavSection } from './NavigationBar/RootNavSection';

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
      <RootNavSection />
      <Routes>
        {/*<Route path='/AboutUs' element={<AboutPageBundler loginPopUpEffects={loginPopUpEffects}/>}/>
        <Route path='/services' element={<OurServices/>}/>
        <Route path="/bookAppointment" element={loginStatus === false ? <Navigate to='/'/> : <BookAppointment/>}/>
        <Route path='/dashboard' element={ loginStatus === false ? <Navigate to='/'/> : <DashBoard/>}/>
        <Route path="/dashboard/MyAppointments" element={loginStatus === false ? <Navigate to='/'/> : <MyAppointment/>}/>
  <Route path="/dashboard/MyProfile" element={loginStatus === false ? <Navigate to='/'/> : <MyProfile/>}/>*/}
      </Routes>
      <FooterComponent/>
    </div>
  );
}

export default App;


//loginStatus === false ? <Navigate to='/bookAppointment'/> :