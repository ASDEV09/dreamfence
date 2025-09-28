import React from 'react'
import { Link } from 'react-router-dom'
import '../../../index.css'
import homeStyle from '../home.module.css'
import homecardata from '../jsdata/homecardata'
function Homemain() {
    return (
        <>
            <div className="hero-section d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-md-6 text-white">
                            <span className={`${homeStyle.mainHeading}`}>Experience the Backyard Fence Difference – Quality, Durability, and Service</span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            </p>
                            <button className="btn btn-lg btn-transparent border text-white">Read More</button>
                        </div>
                        <div className="col-md-6 text-center">
                            <img
                                src="./homeimg/home.png"
                                alt="Fence"
                                className="img-fluid rounded"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${homeStyle.mainCard} container text-center`}>
                <div className='container'>
                    <div className="row ">
                        {homecardata.map((carddata, index) => (
                            <div key={index} className="col-lg-3 col-md-4 col-sm-12" >
                                <div className={`${homeStyle.card} card`}>
                                    <div className='p-2'>
                                        <img src={carddata.src} className="card-img-top" alt="..." />
                                        <div className="card-body text-center">
                                            <p className={`${homeStyle.cardHeadingtext}`} >{carddata.title}</p>
                                            <p className='headingFont'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                            <Link to={"/fenceTypes"} style={{color:"#8B0000"}}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homemain
