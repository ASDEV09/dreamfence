import React from 'react'
import galleryData from './data/galleryData'
import galleystyle from './gallery.module.css'
function Gallery() {
    return (
        <>
            <div className='bg-white py-5'>
                <div className="container text-center">
                    <div className="row">
                        {galleryData.map((item, index) => (
                            <div className="col-lg-3 col-md-4 col-sm-12 mb-4" key={index}>
                                <div className={`${galleystyle.galleryCard} rounded-3 card bg-transparent border-0`}>
                                    <div className="p-2">
                                        <img src={item.img} className="card-img-top" alt={item.title} />
                                        <div className="card-body text-center">
                                            <p>{item.title}</p>
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

export default Gallery
