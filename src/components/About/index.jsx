import React from 'react'
import Footer from '../Home/homecomponents/Footer'
import aboutStyle from './about.module.css'
import '../../index.css'
import Contact from '../Home/homecomponents/Contact'
import AllHero from '../Allhero'
function About() {
  return (
    <>
      <AllHero title="About Us" />
      <div className="mt-5">
        <div className="py-5">
          <div className="row">
            <div className="col">
              <img src="./aboutimg/aboutdiv1.png" className={`img-fluid`} alt="" />
            </div>
            <div className="col py-5">
              <h1 style={{ fontSize: "48px", fontWeight: "400" }} className='fw-normal'>About <span style={{ color: "#162C50", fontWeight: "bold" }}>US</span></h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                <br /><br />
                printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <button className="btn btn-lg btn-transparent border border-dark">Read More</button>
              <img src="./aboutimg/aboutpillar.png" className='img-fluid' alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="py-5">
          <div className="row">
            <div className="col py-5">
              <h1 style={{ fontSize: "48px", fontWeight: "400" }} className="fw-normal">6′ PVC Privacy Fence</h1>
              <p>A PVC fence system by from Backyard Fence can provide a beautiful, low maintenance, and long lasting barrier between properties or settings. It also carries a Lifetime Material Warranty and a two year Installation Warranty.
                <br /><br />
                With over 60 standard styles of vinyl fencing that can be mix and matched in 35 colors and 5 authentic wood grains, no other company can even come close to the available choices of colors, styles, and wood grains Illusions is able to provide for you.
              </p>
              <button className="btn btn-lg btn-transparent border border-dark mt-2">Read More</button>
            </div>
            <div className="col">
              <img src="./aboutimg/aboutdiv2.png" className={`img-fluid`} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  )
}

export default About
