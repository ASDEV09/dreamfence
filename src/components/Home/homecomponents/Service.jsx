import React from 'react'
import '../../../index.css'
import homeStyle from '../home.module.css'
import serviceCard from '../jsdata/servicecarddata'
import { Link } from 'react-router-dom'
function Service() {
    return (
        <>
            <div style={{ backgroundColor: "#FFF" }}>
                <div className="d-flex align-items-center justify-content-center w-100 my-4 py-5">
                    <div className={`${homeStyle.serviceDivider}`}></div>

                    <div className={`${homeStyle.serviceDivHead} px-5`}> Services</div>

                    <div className={`${homeStyle.serviceDivider}`}></div>
                </div>
                <div className='container text-center py-5'>
                    <div className="row">
                        {serviceCard.map((sercard, index) => (
                            <div className={`${homeStyle.cardCOl} col`}>
                                <div key={index} className="card border-0">
                                    <img src={sercard.src} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className={`${homeStyle.cardHeadingtext}`} >{sercard.title}</p>
                                        <p className="headingFont">{sercard.desc}</p>
                                        <Link to={"/services"} className="btn btn-transparent border-dark">Read More</Link>
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

export default Service
