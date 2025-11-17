import React, { useEffect, useState } from "react";
import axios from "axios";

function Service() {
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

  return (
    <>
      <div className="container mt-5 text-center">
        <h2>Services</h2>

        <div className="row mt-5">
          {services.map((ser) => (
            <div key={ser._id} className="col-md-4 mb-4">
              <div className="card">
                <img src={ser.imgUrl} className="card-img-top" alt={ser.title} />
                <div className="card-body">
                  <h5 className="card-title">{ser.title}</h5>
                  <p className="card-text">{ser.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Service;
