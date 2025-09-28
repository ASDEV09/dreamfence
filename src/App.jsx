import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import FenceTypes from './components/FenceTypes'
import Services from './components/Services'
import Faqs from './components/FAQs'
import ScrollToTop from './components/ScrollToTop'
import ContactUs from './components/ContactUs'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/dreamfence/about" element={<About />} />
            <Route path="/fenceTypes" element={<FenceTypes />} />
            <Route path="/services" element={<Services />} />
            <Route path="/fAQs" element={<Faqs />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
