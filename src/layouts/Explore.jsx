/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getPlaces } from "../services/place.service";
import Button from "../components/Button";
// import axios from "axios";

const Explore = () => {
  const [dataCard, setCard] = useState([]);

  //fetching places
  useEffect(() => {
    getPlaces((data) => {
      setCard(data);
    }).catch((err) => {
      console.log("Error: ", err);
    });
  }, []);

  return (
    <>
      <div></div>
      <div className="flex flex-wrap w-full justify-center mb-10">
        {dataCard.map((card) => (
          <div className="flex flex-row">
            <Link to="/">
              <div className="card card-compact w-80 bg-white shadow-xl m-3">
                <figure>
                  <img src={card.img} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-black text-2xl">
                    {card.name}
                  </h2>
                  <p className="text-black">{card.desc}</p>
                  <div className="card-actions justify-end text-orange-500">
                    <div className="badge badge-outline">{card.category}</div>
                    <div className="badge badge-outline">{card.address}</div>
                    <div className="badge badge-outline">{card.rating}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full mb-10 -mt-5">
        <Button value="Add Your Place!" link="/" />
      </div>
    </>
  );
};

export default Explore;
