import React from 'react'
import '../../../index.css'
import homeStyle from '../home.module.css'
import faqsdata from '../jsdata/faqsdata'
function AboutFaqs() {
    return (
        <>

            <div style={{ backgroundColor: "#FFF" }} className='py-5'>
                <div className='text-center '>
                    <p className={`${homeStyle.whyHead}`}>Frequently Asked Questions</p>
                    <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </p>
                </div>

                <div className='container text-center'>
                    <div className="accordion accordion-flush py-3" id="accordionFlushExample">
                        {faqsdata.map((myfaqsdata, index) => (
                            <div key={index} className="accordion-item py-3">
                                <h2 className="accordion-header">
                                    <button className={`${homeStyle.shadow} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#${myfaqsdata.id}`} aria-expanded="false" aria-controls="flush-collapseOne">
                                        <b>{myfaqsdata.question}</b>
                                    </button>
                                </h2>
                                <div id={`${myfaqsdata.id}`} className="accordion-collapse collapse mt-1" data-bs-parent="#accordionFlushExample">
                                    <div className={`${homeStyle.shadow} accordion-body text-start`}>
                                        {myfaqsdata.answer}
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

export default AboutFaqs
