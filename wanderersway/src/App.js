import { useState } from 'react';
import { HomePageController } from './BodyComponents/HomePageComponents/HomepageController';
import logo from './logo.svg';
import { NavigationBar } from './NavigationBar/NavigationBarHeader';
import { LoginOrSignUp } from './UserOperation/LoginOrSignUp';

function App() {

  var [displaylogin, setlogin] = useState('none');
  var [filter, setFilter] = useState('none');
  var [scroll, setscroll] = useState('none');
  var [pointerEvt, setPointerEvt] = useState('auto');

  return (
    <div className="App">
       <NavigationBar setLogin={setlogin} getFilter={filter} setFilter={setFilter} setscroll={setscroll} pointerEvt={pointerEvt}  setPointerEvt={setPointerEvt}/>
       <LoginOrSignUp setLogin={setlogin} getLogin={displaylogin} setFilter={setFilter} setscroll={setscroll} setPointerEvt={setPointerEvt}/>
  {/*<HomePageController getFilter={filter} scroll={scroll} pointerEvt={pointerEvt} setPointerEvt={setPointerEvt}/>*/}
    </div>
  );
}

export default App;
