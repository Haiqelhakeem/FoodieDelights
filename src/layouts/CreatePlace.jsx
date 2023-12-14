import InputField from "../components/InputField";
import { useState } from "react";
import placeServices from "../services/place.service";
// import axios from "axios";

const CreatePlace = () => {
  const [placeData, setPlaceData] = useState({
    name: "",
    desc: "",
    address: "",
    category: "Cafe", // Set a default category if needed
    img: "",
    rating: 0,
  });

  const handleChange = (e) => {
    setPlaceData({ ...placeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await placeServices.createPlace(placeData);
      console.log("Place created successfully!", response.data);
      // Handle success, e.g., redirect to a different page
    } catch (error) {
      console.error("Failed to create place.", error.message);
      // Handle error, show a message to the user, etc.
    }

    return (
      <>
        <div className="bg-slate-800 p-10 flex flex-col items-center text-white">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mb-5">
            Create Your Place
          </h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <InputField
              name="name"
              type="text"
              placeholder="Name"
              required={true}
              onChange={handleChange}
              // value={placeData.name}
            />
            <label htmlFor="desc">Description</label>
            <InputField
              name="desc"
              type="text"
              placeholder="Description"
              required={true}
              onChange={handleChange}
              // value={placeData.desc}
            />
            <label htmlFor="address">Address</label>
            <InputField
              name="address"
              type="text"
              placeholder="Address"
              required={true}
              onChange={handleChange}
              // value={placeData.address}
            />
            <div className="flex flex-col">
              <label htmlFor="category" className="">
                Category{" "}
              </label>
              <select
                name="category"
                id="category"
                className="select select-bordered w-56 bg-white text-black mb-3"
                onChange={handleChange}
                // value={placeData.category}
              >
                <option value="Cafe">Cafe</option>
                <option value="Bakery">Bakery</option>
                <option value="Restaurant">Restaurant</option>
              </select>
              <label htmlFor="img">Image URL</label>
            </div>
            <InputField
              name="img"
              type="text"
              placeholder="Image URL"
              required={true}
              onChange={handleChange}
              // value={placeData.img}
            />
            <label htmlFor="rating">Rating</label>
            <InputField
              name="rating"
              type="number"
              placeholder="Rating"
              required={true}
              onChange={handleChange}
              // value={placeData.rating}
            />
            <div className="flex justify-center">
              <button
                className="btn bg-gradient-to-r from-orange-500 to-yellow-500 text-black mt-7 w-full"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  };
};

export default CreatePlace;
