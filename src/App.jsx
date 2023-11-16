import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './component/Header'
import Home from './component/Home'
import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import Footer from './component/Footer'
import "./styles/footer.scss"
import Contact from './component/Contact'
import "./styles/contact.scss"
import Services from './component/Services'
import "./styles/mediaquery.scss"
const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Services/>}/>
          
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
