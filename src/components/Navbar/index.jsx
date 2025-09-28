import React from 'react'
import { Link } from 'react-router-dom'
import navstyle from './navbar.module.css'
function Navbar() {
    return (
        <>
            <div className={navstyle.navMain}>
                <ul className={`${navstyle.navbarNav} navbar-nav  bg-white ms-auto align-items-end`}>
                    <div className='d-flex me-4'>
                        <li className='mx-3 '>
                            <div className={`${navstyle.iconFacebookround}`}>
                                <i className={`${navstyle.iconFacebook} fs-3 bi bi-facebook`} ></i>
                            </div>
                        </li>
                        <li className='mx-3'>
                            <div className={`${navstyle.iconTwitterround}`}>
                                <i className={`${navstyle.iconTwitter} fs-4 bi bi-twitter`}></i>
                            </div>
                        </li>
                        <li className='mx-3'>
                            <div className={`${navstyle.iconlinkedinround}`}>
                                <i className={`${navstyle.iconlinkedin} fs-4 bi bi-linkedin`}></i>
                            </div>
                        </li>
                        <div className={`${navstyle.emaildisplay}`}>
                            <li className='mx-4'>
                                <a className={`${navstyle.email} nav-link mt-2`} href="#">
                                    Email Info@gmail.com
                                </a>
                            </li>
                            <span className={`${navstyle.center} `}> | </span>
                            <li className='mx-4'>
                                <a className={`${navstyle.email} nav-link mt-2`} href="#">
                                    Call Us: 518-452-9496
                                </a>
                            </li>
                        </div>
                    </div>
                </ul>

                <div>
                    <img src="./logoImg.jpg" className={`${navstyle.smallImage}`} alt="" />
                    <ul className={`${navstyle.linkbarbackground} navbar-nav ms-auto`}>
                        <div className={`${navstyle.linkbar}`}>
                            <Link to={"/"} className={`${navstyle.myNavLink} mx-4`}>Home</Link>
                            <Link to={"/about"} className={`${navstyle.myNavLink} mx-4`}>About</Link>
                            <Link to={"/fenceTypes"} className={`${navstyle.myNavLink} mx-4`}>Fence Types</Link>
                            <Link to={"/services"} className={`${navstyle.myNavLink} mx-4`}>Services</Link>
                            <Link to={"/fAQs"} className={`${navstyle.myNavLink} mx-4`}>FAQs</Link>
                            <Link to={"/contactus"} className={`${navstyle.myNavLink} mx-4 me-5`}>Contact Us</Link>
                        </div>
                    </ul>
                </div>
            </div>



            <div className={`${navstyle.smallScreen}`}>
                <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
                    <a className="navbar-brand" href="#"><img src="./logoImg.jpg" className={`${navstyle.logo}`} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse p-0" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-2">
                            <div className='d-flex'>
                                <li className='ms-3 '>
                                    <div className={`${navstyle.iconFacebookround}`}>
                                        <i className={`${navstyle.iconFacebook} fs-3 bi bi-facebook`} ></i>
                                    </div>
                                </li>
                                <li className='ms-3'>
                                    <div className={`${navstyle.iconTwitterround}`}>
                                        <i className={`${navstyle.iconTwitter} fs-4 bi bi-twitter`}></i>
                                    </div>
                                </li>
                                <li className='ms-3'>
                                    <div className={`${navstyle.iconlinkedinround}`}>
                                        <i className={`${navstyle.iconlinkedin} fs-4 bi bi-linkedin`}></i>
                                    </div>
                                </li>
                            </div>
                            {/* <div className={`${navstyle.emaildisplay}`}> */}
                            <li className='ms-4 mt-3'>
                                <a className={`${navstyle.email} nav-link `} href="#">
                                    Email Info@gmail.com
                                </a>
                            </li>
                            <li className='ms-4'>
                                <a className={`${navstyle.email} nav-link`} href="#">
                                    Call Us: 518-452-9496
                                </a>
                            </li>

                            {/* </div> */}
                        </ul>
                        <ul className={`${navstyle.mainLinks} py-4`}>
                            <li><Link style={{textDecoration:"none" , color: "#FFF"}} to={"/dreamfence/"} >Home</Link ></li>
                            <li className='mt-2'><Link style={{textDecoration:"none" , color: "#FFF" }} to={"/dreamfence/about"} >About</Link ></li>
                            <li className='mt-2'><Link style={{textDecoration:"none" , color: "#FFF" }} to={"/fenceTypes"} >Fence Types</Link ></li>
                            <li className='mt-2'><Link style={{textDecoration:"none" , color: "#FFF" }} to={"/services"} >Services</Link ></li>
                            <li className='mt-2'><Link style={{textDecoration:"none" , color: "#FFF" }} to={"/fAQs"} >FAQs</Link ></li>
                            <li className='mt-2'><Link style={{textDecoration:"none" , color: "#FFF" }} to={"/contactus"} >Contact Us</Link ></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
