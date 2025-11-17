import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../../index.css';
import homeStyle from '../home.module.css';

function AboutFaqs() {
  const [faqs, setFaqs] = useState([]);

  const fetchFaqs = async () => {
    try {
      const res = await axios.get("https://dreamfenceapi.vercel.app/faqs");
      setFaqs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  return (
    <div style={{ backgroundColor: "#FFF" }} className='py-5'>
      <div className='text-center'>
        <p className={`${homeStyle.whyHead}`}>Frequently Asked Questions</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>


      <div className='container text-center'>
        <div className="accordion accordion-flush py-3" id="accordionFlushExample">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item py-3">
              <h2 className="accordion-header">
                <button
                  className={`${homeStyle.shadow} accordion-button collapsed`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse${index}`}
                >
                  <b>{faq.question}</b>
                </button>
              </h2>
              <div id={`flush-collapse${index}`} className="accordion-collapse collapse mt-1" data-bs-parent="#accordionFlushExample">
                <div className={`${homeStyle.shadow} accordion-body text-start`}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutFaqs;
