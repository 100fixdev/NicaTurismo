//import { useState } from 'react'

import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import './App.css'
import Footer from './components/Footer'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <> 
      <Navbar />
      <Welcome />
      <Footer />
    </>
  )
}

export default App
