import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fruits from './Components/CreateClassState'


function App() {
  return (
    <div>
        <Fruits name="Watermelon" price="10"></Fruits>
        <Fruits name="Kiwi" price="14"></Fruits>
    </div>
  );
}

export default App;
