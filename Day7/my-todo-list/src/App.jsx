import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Componets/Header'
import Footer from './Componets/Footer'
import Body from './Componets/Body'

function App() {
 

  return (
    <div> 
        <Header/>
        <Body title = "Check the code" task = "Code of JS for Wipro needs to be tested"></Body>

    </div>
   
  )
}

export default App
