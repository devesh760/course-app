import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import ContactUs from './Components/ContactUs'
import {Route} from 'react-router-dom'
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Route component={Home} path='/' exact/>
      <Route component={ContactUs} path='/contact-us' />
    </div>
  );
}

export default App;
