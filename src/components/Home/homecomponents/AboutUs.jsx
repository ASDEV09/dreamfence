import React from 'react'
import '../../../index.css'
import homeStyle from '../home.module.css'
import { Link } from 'react-router-dom'

function AboutUs() {
    return (
        <>
            <div className="mt-5">
                <div className="py-5">
                    <div className="row">
                        <div className="col">
                            <div className={`${homeStyle.aboutDiv} py-5`}>
                                <img src="./homeimg/aboutDiv.png" className={`${homeStyle.aboutDivImg} img-fluid`} alt="" />
                            </div>
                        </div>
                        <div className="col py-5">
                            <h1 style={{ fontSize: "48px", fontWeight: "400" }}>About US</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                <br /><br />
                                printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <Link to={"/about"}>
                                <button className="btn btn-lg btn-transparent border text-dark border-dark">Read More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
