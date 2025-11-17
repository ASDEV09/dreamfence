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
import GalleryAdd from './components/Admin/add/GalleryAdd'
import AddCard from './components/Admin/add/addhomecard'
import AddService from './components/Admin/add/AddService'
import AddWhyChoose from './components/Admin/add/AddWhyChoose'
import AddFaq from './components/Admin/add/AddFaq'
import AdminDashboard from "./components/Admin/AdminMain"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />

        <Routes>
          {/* Main Routes */}
          <Route path="/dreamfence/" element={<Home />} />
          <Route path="/dreamfence/" element={<Home />} />
          <Route path="/dreamfence/admin" element={<AdminDashboard />} />
          <Route path="/dreamfence/addfaq" element={<AddFaq />} />
          <Route path="/dreamfence/addservice" element={<AddService />} />
          <Route path="/dreamfence/addwhychoose" element={<AddWhyChoose />} />
          <Route path="/dreamfence/addcard" element={<AddCard />} />
          <Route path="/dreamfence/about" element={<About />} />
          <Route path="/dreamfence/fenceTypes" element={<FenceTypes />} />
          <Route path="/dreamfence/services" element={<Services />} />
          <Route path="/dreamfence/fAQs" element={<Faqs />} />
          <Route path="/dreamfence/contactus" element={<ContactUs />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
