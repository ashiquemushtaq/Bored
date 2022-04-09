import React from 'react';
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import './App.css'
import Activityy from './components/Activity';
import Card from './components/Card';
import Nav from './components/Nav';

function App (){
  return(
    <Router>
      <Nav/>
      <Routes>
        <Route exact path='/' element={
          <Card/>
        } />
        <Route path='/activity'  element={
          <Activityy/>
        }/>
      </Routes>
    </Router>
  ) 
}

export default App;