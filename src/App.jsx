import React from 'react';
import './App.css'
import Food from './Components/Food'
import Coffee from './Components/Coffee'
import Clothes from './Components/Clothes'
import Logo from './Components/Logo.png'
import Religion from './Components/Religon'
import Wildlife from './Components/Wildlife'
import People from './Components/People';
import Histor from "./Components/History";
import Land from './Components/Land';
import Gold from './Components/Gold';
import Sea from './Components/Sea';



const App = () => {


  return(
  <>
    <body> 
      <br/>
      <img className="logo"src={Logo}/>
      <br/>
      <br/>
      <div>
        <section>
          <Food label='Injera'/>
          <Clothes label="Clothes"/>
          <Religion/>
          <Wildlife/>
          <Sea label="Massawa"/>
          <Coffee label="Buna"/>
          <People/>
          <Histor/>
          <Land label="Travel"/>
          <Gold/>
          
        </section>
        <br/>
        <br/>
    </div>
    </body>
    
  </>
  )
}

export default App;
