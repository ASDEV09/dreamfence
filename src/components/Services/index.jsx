import React, { useEffect, useState } from 'react';
import Footer from '../Home/homecomponents/Footer';
import WhyChoose from '../Home/homecomponents/WhyChoose';
import serviceStyle from './service.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Services() {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const res = await axios.get("https://dreamfenceapi.vercel.app/services");
      setServices(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  if (!services.length) return <p className="text-center mt-5">Loading services...</p>;

  const firstService = services[0];
  const otherServices = services.slice(1);

  return (
    <>
      <div className="bg-white py-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card border-0">
              <div className="d-flex justify-content-center">
                <img src={firstService.imgUrl} className="img-fluid" style={{ height: "90%", width: "90%" }} alt={firstService.title} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
            <div className="container justify-content-center">
              <h1><b>{firstService.title}</b></h1>
            </div>
            <div className="d-flex justify-content-end">
              <img src="./serviceimg/ser.png" className={`${serviceStyle.serviceImg} img-fluid`} alt="" />
            </div>
            <div className="container justify-content-center">
              <p>{firstService.desc}</p>
            </div>
          </div>
        </div>

        <div className="container text-center py-5">
          <div className="row">
            {otherServices.map((card, index) => (
              <div className="col-lg-6 col-md-6 col-sm-12 " key={index}>
                <div className="card border-0">
                  <img src={card.imgUrl} className="card-img-top" alt={card.title} />
                  <div className="card-body">
                    <h1>{card.title}</h1>
                    <p>{card.desc}</p>
                    <Link to={"/about"}>
                      <button className="btn btn-lg btn-transparent border text-dark border-dark">Read More</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WhyChoose />
      <Footer />
    </>
  );
}

export default Services;
