import React, { useEffect, useState } from "react";
import axios from "axios";

function WhyChoose() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const res = await axios.get("https://dreamfenceapi.vercel.app/whychoose");
      setItems(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div style={{ backgroundColor: "#EAEAEA" }}>
      <div className="container py-5">
        <div className="text-center">
          <p className="fs-3 fw-bold">Why Choose Us?</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>


        <div className="row py-5 text-center">
          {items.map((item) => (
            <div key={item._id} className="col-md-4 mb-4">
              <div className="card bg-transparent border-0">
                <img src={item.imgUrl} className="img-fluid mx-auto d-block" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title"><b>{item.title}</b></h5>
                  <p className="card-text">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
