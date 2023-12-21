/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import placeServices from "../services/place.service";
import Button from "../components/Button";
import { Icon } from "@iconify/react";
// import axios from "axios";

const Explore = () => {
  const [dataCard, setCard] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  console.log(filteredData);

  //fetching places
  useEffect(() => {
    placeServices
      .getPlaces((data) => {
        setCard(data);
        setFilteredData(data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);

  const filterItem = (category) => {
    const newData = dataCard.filter((card) => card.category === category);
    setFilteredData(newData);
  };

  const showAll = () => {
    setFilteredData(dataCard); // Show all places
  };

  const handleCardClick = (id) => {
    history.push(`/places/${id}`);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-1/4 p-3 mr-10">
          {/* Create filter buttons for each category */}
          <h3 className="text-lg font-bold flex justify-center text-white mb-3">
            Filter By Category
          </h3>
          <div className="flex flex-col">
            <button
              className="btn bg-orange-500 text-white mx-5 mb-3"
              onClick={showAll}
            >
              Show All
            </button>
            <button
              className="btn bg-orange-500 text-white mx-5 mb-3"
              onClick={() => filterItem("Cafe")}
            >
              Cafe
            </button>
            <button
              className="btn bg-orange-500 text-white mx-5 mb-3"
              onClick={() => filterItem("Bakery")}
            >
              Bakery
            </button>
            <button
              className="btn bg-orange-500 text-white mx-5 mb-3"
              onClick={() => filterItem("Restaurant")}
            >
              Restaurant
            </button>
          </div>
        </div>
        <div className="flex flex-wrap w-full justify-center md:mb-10 md:-ml-20">
          {filteredData.map((card) => (
            <div
              className="flex flex-row"
              key={card._id}
              onClick={() => handleCardClick(card.id)}
            >
              <Link to={`/places/${card._id}`}>
                <div className="card card-compact w-64 h-96 bg-white shadow-xl m-3">
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
                      <div className="badge badge-outline">
                        <Icon icon="ic:round-star" width={18} height={18} />
                        {card.rating}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center md:justify-start items-center w-auto md:w-1/6 flex-col my-5 md:mt-5 gap-5 mr-3">
          <Button value="Add Your Place!" link="/create-place" />
          <Button value="Find more articles" link="/article" />
        </div>
      </div>
    </>
  );
};

export default Explore;
