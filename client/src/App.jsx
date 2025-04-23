import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'
import Banner from './components/Banner'
import Skills from './components/Skills'
import String from './components/String'
import Projects from './components/Projects'
import ConnectorPath from './components/ConnectorPath'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
          <NavBar/>
          <Banner/>
          <ConnectorPath/>
          <Skills/>
          <String/> 
          <Projects/>
          <ConnectorPath/>
          <ContactForm/>
          <Footer/>
        </div>
    </>
  )
}

export default App
