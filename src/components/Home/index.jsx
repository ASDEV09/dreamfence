import React from 'react'
import '../../index.css'
import Footer from './homecomponents/Footer'
import Contact from './homecomponents/Contact'
import Service from './homecomponents/Service'
import AboutUs from './homecomponents/AboutUs'
import Homemain from './homecomponents/Homemain'
import AboutFaqs from './homecomponents/AboutFaqs'
import WhyChoose from './homecomponents/WhyChoose'
function Home() {
    return (
        <>
            <Homemain />
            <AboutUs />
            <Service />
            <WhyChoose />
            <AboutFaqs />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
