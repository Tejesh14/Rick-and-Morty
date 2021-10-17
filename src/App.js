import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs';
import Characters from './Components/Characters';
import ShowCharacter from './Components/ShowCharacter';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <NavigationBar/>
      </header>
      <div className="App">
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/aboutUs" component={AboutUs}/>
          <Route path="/character" component={Characters} exact/>
          <Route path="/character/:charId" component={ShowCharacter}/>
        </Switch>
      </div>
      <footer>
        <Footer/>
      </footer>
    </Router>
  );
}

export default App;
