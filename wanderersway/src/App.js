import { HomePageController } from './BodyComponents/HomePageComponents/HomepageController';
import logo from './logo.svg';
import { NavigationBar } from './NavigationBar/NavigationBarHeader';


function App() {
  return (
    <div className="App">
       <NavigationBar/>
       <HomePageController/>
    </div>
  );
}

export default App;
