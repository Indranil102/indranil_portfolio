import './App.css'
import AnimatedBg from './components/AnimatedBg'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Extracurricular from './components/Extracurricular'
import Hero from './components/Hero'
import { Navbar } from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <>
    <AnimatedBg />
    <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Extracurricular />
      <Contact />
    </>
  )
}

export default App
