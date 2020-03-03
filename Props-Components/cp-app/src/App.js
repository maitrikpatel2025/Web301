import React from 'react';
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Introduction to React</h1>
        <p className="lead">hello World!</p>
        <h2>About Me</h2>
        <About
          about="Hey I'm Maitrik"
        />
        <h2>Contact Me</h2>
        <Contact
         email="maitrik.patel2025@gmail.com"
         phone="839572859"/>
        <Contact
         email="mkpatel22@gmail.com"
         phone="647485749"/>
      </div>
    </div>
  );
}

export default App;
