import { useState } from 'react';
import { HomePageController } from './BodyComponents/HomePageComponents/HomepageController';
import logo from './logo.svg';
import { NavigationBar } from './NavigationBar/NavigationBarHeader';
import { LoginOrSignUp } from './UserOperation/LoginOrSignUp';

function App() {

  var [displaylogin, setlogin] = useState('none');
  var [filter, setFilter] = useState('none');

  return (
    <div className="App">
       <NavigationBar setLogin={setlogin} getFilter={filter} setFilter={setFilter}/>
       <LoginOrSignUp setLogin={setlogin} getLogin={displaylogin} setFilter={setFilter}/>
       <HomePageController getFilter={filter}/>
    </div>
  );
}

export default App;
