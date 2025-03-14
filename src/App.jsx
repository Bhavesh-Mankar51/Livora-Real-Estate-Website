import Header from './components/header/header'
import Hero from './components/hero/hero'
import Companies from './components/companies/companies'
import Residencies from './components/residencies/residencies'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Value from './components/value/value'
import GetStarted from './components/getstarted/getstarted'
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />  
        <Hero/>  
      </div>
      <Companies/>
      <Residencies />
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer />
    </div>
  )
}

export default App
