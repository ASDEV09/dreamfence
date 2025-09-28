import React from 'react'
import AllHero from '../Allhero'
import Footer from '../Home/homecomponents/Footer'
import '../../index.css'
import contactstyle from './contact.module.css'
function ContactUs() {
    return (
        <>
            <AllHero title="Contact Us" />
            <div className="bg-white">
                <div className="py-5">
                    <div className="container py-5 position-relative">
                        <div className="py-5">
                            <h1 className='headingFont'>Contact Us</h1>
                            <div className='py-5 container'>
                                <form action="">
                                    <div className={`${contactstyle.shadow} row py-5`}>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <label className='headingFont fw-bold' htmlFor="FirstName">First Name</label><br />
                                            <input type="text" className={`${contactstyle.inputbottomborder} mb-5 mt-2`} placeholder="Enter First name" aria-label="First name" required />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <label className='headingFont fw-bold' htmlFor="Last Name">Last Name</label>
                                            <input type="text" className={`${contactstyle.inputbottomborder} mb-5 mt-2`} placeholder="Enter Last Name" required aria-label="Enter Last Name" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <label className='headingFont fw-bold' htmlFor="Email">Email</label>
                                            <input type="email" className={`${contactstyle.inputbottomborder} mb-5 mt-2`} placeholder="Enter Your Email" required aria-label="Enter Your Email" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <label className='headingFont fw-bold' htmlFor="Phone Number">Phone Number</label>
                                            <input type="number" className={`${contactstyle.inputbottomborder} mb-5 mt-2`} placeholder="Enter Phone Number" required aria-label="Enter Phone Number" />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <label className='headingFont fw-bold' htmlFor="Message">Message</label>
                                            <input type="text" className={`${contactstyle.inputbottomborder} mb-5 mt-2`} placeholder="Enter Your Message" required aria-label="Enter Your Message" />
                                        </div>
                                        <div className="textmt-4">
                                            <button className={`${contactstyle.contactBtn}`}>Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="d-flex">
                                        <img src="./contactimg/email.png" className={`${contactstyle.imgsize}`} alt="" />
                                        <p className='ms-2 headingFont'>
                                            <span style={{ color: "#FE0500", fontWeight: "bold" }}>Email</span>
                                            <br />
                                            <span>info@gmail.com</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-flex">
                                        <img src="./contactimg/telephone.png" className={`${contactstyle.imgsize}`} alt="" />
                                        <p className='ms-2 headingFont'>
                                            <span style={{ color: "#FE0500", fontWeight: "bold" }}>Phone</span>
                                            <br />
                                            <span>123-456-789</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-flex">
                                        <img src="./contactimg/map.png" className={`${contactstyle.imgsize}`} alt="" />
                                        <p className='ms-2 headingFont'>
                                            <span style={{ color: "#FE0500", fontWeight: "bold" }}>Address</span>
                                            <br />
                                            <span>1001 Congress avenue, suite 400</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={contactstyle.socialIcons}>
                            <a href="#" className={contactstyle.icon}>
                                <img src="./contactimg/facebookicon.png" className='h-50' alt="" />
                            </a>
                            <a href="#" className={contactstyle.icon}>
                                <img src="./contactimg/instaicon.png" className='h-50' alt="" />
                            </a>
                            <a href="#" className={contactstyle.icon}>
                                <img src="./contactimg/twittericon.png" className='h-50' alt="" />
                            </a>
                            <a href="#" className={contactstyle.arrowicon}>
                                <img src="./contactimg/arrowicon.png" className='h-50' alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div >

            <Footer />
        </>
    )
}

export default ContactUs
