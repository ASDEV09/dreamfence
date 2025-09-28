import React from 'react'
import homeStyle from '../home.module.css'
import whyYou from '../jsdata/whyyou'
function WhyChoose() {
    return (
        <>
            <div style={{ backgroundColor: "#EAEAEA" }}>
                <div className='container py-5' >
                    <div className='text-center'>
                        <p className={`${homeStyle.whyHead}`}>Why Choose Us?</p>
                        <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </p>
                    </div>
                    <div className="container text-center">
                        <div className="row py-5">
                            {whyYou.map((whyYou, index) => (
                                <div key={index} className="col text-center">
                                    <div className="card bg-transparent border-0">
                                        <img src={whyYou.src} className="img-fluid d-block mx-auto" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title"><b>{whyYou.title}</b></h5>
                                            <p className="card-text">{whyYou.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChoose
