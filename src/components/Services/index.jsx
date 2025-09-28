import React from 'react'
import Footer from '../Home/homecomponents/Footer'
import WhyChoose from '../Home/homecomponents/WhyChoose'
import serviceCard from '../Home/jsdata/servicecarddata'
import service from './service.module.css'
import { Link } from 'react-router-dom'
function Services() {
  return (
    <>
      <div className="bg-white py-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card border-0">
              <div className="d-flex justify-content-center">
                <img src={serviceCard[0].src} className="img-fluid" style={{ height: "90%", width: "90%" }} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
            <div className="container justify-content-center">
              <h1><b>{serviceCard[0].title}</b></h1>
            </div>
            <div className="d-flex justify-content-end">
              <img src="./serviceimg/ser.png" className={`${service.serviceImg} img-fluid`} alt="" />
            </div>
            <div className="container justify-content-center">
              <p>All swimming pools shall be enclosed within a fence or other barrier, at least four feet high, which can only be entered by bathers through self-closing and positive self-latching doors or gates. The knob or handle controlling the latch shall be at least 40 inches above grade. The gate or door shall be locked and access to pool prevented when the pool is not supervised.</p>
              <p>Swimming pool fences constructed after the effective date of this Subpart [March 30, 1988] shall meet the requirements of the Uniform Code. For existing swimming pool fences, no opening shall exceed four inches.</p>
            </div>
            <div className="container justify-content-center">
              <Link to={"/about"}>
                <button className="btn btn-lg btn-transparent border text-dark border-dark mt-3">Read More</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="container text-center py-5">
          <div className="row">
            {serviceCard.slice(1).map((card, index) => (
              <div className="col-lg-6 col-md-6 col-sm-12 " key={index}>
                <div className="card border-0">
                  <img src={card.src} className="card-img-top" alt={card.title} />
                  <div className="card-body">
                    <h1>{card.title}</h1>
                    <p>{card.desc}</p>
                    <Link to={"/about"}>
                      <button className="btn btn-lg btn-transparent border text-dark border-dark">Read More</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <WhyChoose />
      <Footer />
    </>

  )
}

export default Services
