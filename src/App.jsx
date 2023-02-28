import React from 'react';
import './App.css'
import Food from './Components/Food'
import Coffee from './Components/Coffee'
import Clothes from './Components/Clothes'
import Logo from './Components/Logo.png'



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
          <Coffee label="Buna"/> 
          <Clothes label="Clothes"/>
        </section>
        <br/>
        <br/>
    </div>
    </body>
    
  </>
  )
}

export default App;
