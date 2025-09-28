import React from 'react'
import Footer from '../Home/homecomponents/Footer'
import AllHero from '../Allhero'
import WhyChoose from '../Home/homecomponents/WhyChoose'
import Gallery from './Gallery/Gallery'
function FenceTypes() {
  return (
    <>
      <AllHero title={"Our Gallery"} />
      <Gallery/>
      <WhyChoose />
      <Footer />
    </>
  )
}

export default FenceTypes
