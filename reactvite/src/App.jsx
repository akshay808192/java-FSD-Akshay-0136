import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import mypic from './image/mypic.jpg'
import './App.css'

function App() {
  const a=20;
  const name="Akshay Pratap";
  const roll=2400320100136;
  
  return (
    <div style={{border:'5px solid red',width:'300px',height:'450px'}}>
      <h2>Welcome to React vite</h2>
      <h3 style={{color:'brown'}}>ABES Engineering College</h3>
      <h2 style={{color:'white'}}>Name:{name}</h2>
      <h3>Roll:{roll}</h3>
      

      <img src={mypic} height={200} width={200} alt="" />
    </div>
  )
}

export default App