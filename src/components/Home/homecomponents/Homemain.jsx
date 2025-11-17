import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../index.css";
import homeStyle from "../home.module.css";

function Homemain() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCards = async () => {
    try {
      const res = await fetch("https://dreamfenceapi.vercel.app/homecards"); // 👈 API URL
      const data = await res.json();
      setCards(data); 
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cards", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <>
      <div className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-md-6 text-white">
              <span className={`${homeStyle.mainHeading}`}>
                Experience the Backyard Fence Difference – Quality, Durability, and Service
              </span>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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

      {/* CARDS SECTION */}
      <div className={`${homeStyle.mainCard} container text-center`}>
        <div className="container">
          <div className="row">

            {loading && <p>Loading...</p>}

            {!loading &&
              cards.map((carddata, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-12">
                  <div className={`${homeStyle.card} card`}>
                    <div className="p-2">
                      <img src={carddata.imgUrl} className="card-img-top" alt="..." />
                      <div className="card-body text-center">
                        <p className={`${homeStyle.cardHeadingtext}`}>{carddata.title}</p>
                        <p className="headingFont">
                          {carddata.description}
                        </p>
                        <Link to={"/dreamfence/fenceTypes"} style={{ color: "#8B0000" }}>
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

          </div>
        </div>
      </div>
    </>
  );
}

export default Homemain;
