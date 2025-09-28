import React from 'react'
import { Link } from 'react-router-dom'
import '../../../index.css'
import homeStyle from '../home.module.css'
function Footer() {
    return (
        <>
            <div className={`${homeStyle.footerMain}`}>
                <footer className="text-center text-lg-start">
                    <section className="">
                        <div className="container text-center text-md-start">
                            <div className="row">
                                <div className="mt-5 col-md-3 col-lg-4 col-xl-3 mb-4  text-start">
                                    <img src="./footerimg/footerlogo.png" className='w-50 ' alt="" />
                                    <p className='mt-4'>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetu
                                    </p>
                                    <div >
                                        <img src="./footerimg/facebookIcon.png" className={`${homeStyle.footerIcon}`} alt="" />
                                        <img src="./footerimg/instaIcon.png" className={`${homeStyle.footerIcon} ms-2`} alt="" />
                                        <img src="./footerimg/twitterIcon.png" className={`${homeStyle.footerIcon} ms-2`} alt="" />
                                        <img src="./footerimg/linkedinIcon.png" className={`${homeStyle.footerIcon} ms-2`} alt="" />
                                    </div>
                                </div>

                                <div className="mt-5 col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-start">
                                    <h6 className="headingFont mb-4" style={{ color: "#F36B12" }}>
                                        Navigate
                                        <div style={{ height: "2px", backgroundColor: "#D9D9D9", marginTop: "10px" }} ></div>
                                    </h6>
                                        <p>
                                            <Link to={"/"} style={{ textDecoration: "none" }} className="text-reset">Home</Link>
                                        </p>
                                        <p>
                                            <Link to={"/about"} style={{ textDecoration: "none" }} className="text-reset">About</Link>
                                        </p>
                                        <p>
                                            <Link to={"/fenceTypes"} style={{ textDecoration: "none" }} className="text-reset">Fence Types</Link>
                                        </p>
                                        <p>
                                            <Link to={"/services"} style={{ textDecoration: "none" }} className="text-reset">Services</Link>
                                        </p>
                                        <p>
                                            <Link to={"/fAQs"} style={{ textDecoration: "none" }} className="text-reset">FAQs</Link>
                                        </p>
                                </div>

                                <div className="mt-5 col-md-3 col-lg-2 col-xl-2 mx-auto mb-4  text-start">
                                    <h6 className="headingFont mb-4" style={{ color: "#FE0500" }}>
                                        Partners
                                        <div style={{ height: "2px", backgroundColor: "#D9D9D9", marginTop: "10px" }} ></div>
                                    </h6>
                                        <p>
                                            Why Partner with Arctic Wolf?
                                        </p>
                                        <h6 className="headingFont" style={{ color: "#FE0500", marginTop: "40px" }}>
                                            Services
                                            <div style={{ height: "2px", backgroundColor: "#D9D9D9", marginTop: "10px" }} ></div>
                                        </h6>
                                        <p style={{ color: "#FFF" }}>
                                            Lorem ipsum dolor sit amet,
                                            Lorem ipsum dolor
                                        </p>
                                </div>
                                <div className="mt-5 col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-start">
                                    <h6 className="headingFont mb-4" style={{ color: "#FE0500" }}>
                                        Contact Us
                                        <div style={{ height: "2px", backgroundColor: "#D9D9D9", marginTop: "10px" }} ></div>
                                    </h6>

                                    <div className='d-flex mt-3'>
                                        <i className="bi bi-envelope-fill"></i>
                                        <h6 className='ms-2'>
                                            <span style={{ color: "#FE0500", fontWeight: "400" }}>Email</span>
                                            <br />
                                            <span style={{ color: "#FFF", fontWeight: "400" }}>info@gmail.com</span>
                                        </h6>
                                    </div>
                                    <div className='d-flex mt-3'>
                                        <i className="bi bi-telephone-fill"></i>
                                        <h6 className='ms-2'>
                                            <span style={{ color: "#FE0500", fontWeight: "400" }}>Phone</span>
                                            <br />
                                            <span style={{ color: "#FFF", fontWeight: "400" }}>123-456-789</span>
                                        </h6>
                                    </div>
                                    <div className='d-flex mt-3'>
                                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.0809 6.44482H15.2846C15.2892 6.50711 15.2892 6.56965 15.2846 6.63193C15.1331 7.36039 14.8846 8.06523 14.5456 8.72757C13.6398 10.4463 12.4861 12.0225 11.1214 13.4053L9.7649 14.687L8.44577 13.3866C7.07425 12.0074 5.91694 10.4307 5.0123 8.70886C4.67168 8.04393 4.42304 7.33578 4.27321 6.60387C4.26021 6.55156 4.25083 6.49842 4.24515 6.44482H2.44889L0.203568 17.6714H19.3262L17.0809 6.44482Z" fill="white" />
                                            <path d="M5.0874 5.5093C5.08978 5.82384 5.12426 6.13731 5.19031 6.44485C5.32892 7.09492 5.55224 7.724 5.85455 8.31595C6.71678 9.93473 7.8104 11.4192 9.10092 12.7224L9.76516 13.3773L10.4294 12.7224C11.7199 11.4192 12.8135 9.93473 13.6758 8.31595C13.9781 7.724 14.2014 7.09492 14.34 6.44485C14.4061 6.13731 14.4405 5.82384 14.4429 5.5093C14.4429 4.26868 13.9501 3.07888 13.0728 2.20163C12.1956 1.32438 11.0058 0.831543 9.76516 0.831543C8.52454 0.831543 7.33473 1.32438 6.45748 2.20163C5.58024 3.07888 5.0874 4.26868 5.0874 5.5093ZM10.7007 6.44485H8.82961V4.57375H10.7007V6.44485Z" fill="white" />
                                        </svg>
                                        <h6 className='ms-2'>
                                            <span style={{ color: "#FE0500", fontWeight: "400" }}>Address</span>
                                            <br />
                                            <span style={{ color: "#FFF", fontWeight: "400" }}>1001 Congress avenue, suite 400</span>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="container">
                        <hr />

                    </div>
                    <div className="text-center p-4">
                        @2022 Creative People All Right reserved.
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer
