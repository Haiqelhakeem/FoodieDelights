import { useEffect, useState } from "react";
import InputField from "../components/InputField";
import placeService from "../services/place.service";
import Button from "../components/Button";
import { useParams } from "react-router-dom";

const UpdatePlace = () => {
    const id = useParams().id;
    const [placeData, setPlaceData] = useState({
        name: "",
        address: "",
        desc: "",
        category: "",
        img: "",
    })

    useEffect(() => {
        placeService.getPlaceById(id, (data) => {
            setPlaceData(data);
        })
    }, [id])

    const handleChange = (e) => {
        // setPlaceData({ ...placeData, [e.target.name]: e.target.value });
        const { name, value } = e.target;
        setPlaceData({
            ...placeData,
            [name]: value,
        });
    }
    
    const handleCategoryChange = (event) => {
        setPlaceData({
            ...placeData,
            category: event.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await placeService.updatePlace(placeData, id);
            console.log("Place data:", placeData);
            alert("Place updated successfully!");
            window.location.href = "/explore";
            // Handle success, e.g., redirect to a different page
        } catch (error) {
            console.error("Failed to update place.", error.message);
            // Handle error, show a message to the user, etc.
        }
    }
  return (
    <div className="bg-slate-800 p-10 flex flex-col items-center text-white">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mb-5">
        Edit Your Place
      </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <InputField
          name="name"
          type="text"
          placeholder="Name"
          required={true}
          onChange={handleChange}
          value={placeData.name}
        />
        <label htmlFor="desc">Description</label>
        <InputField
          name="desc"
          type="text"
          placeholder="Description"
          required={true}
          onChange={handleChange}
          value={placeData.desc}
        />
        <label htmlFor="address">Address</label>
        <InputField
          name="address"
          type="text"
          placeholder="Address"
          required={true}
          onChange={handleChange}
          value={placeData.address}
        />
        <div className="flex flex-col">
          <label htmlFor="category" className="">
            Category{" "}
          </label>
          <select
            name="category"
            id="category"
            className="select select-bordered w-56 bg-white text-black mb-3"
            onChange={handleCategoryChange}
            value={placeData.category}
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
          value={placeData.img}
        />
        <label htmlFor="rating">Rating</label>
        <InputField
          name="rating"
          type="number"
          placeholder="Rating"
          required={true}
          onChange={handleChange}
          value={placeData.rating}
        />
        <label htmlFor="contact">Contact</label>
        <InputField
          name="contact"
          type="text"
          placeholder="Contact"
          required={true}
          onChange={handleChange}
          value={placeData.contact}
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
      <div className="flex justify-center w-full mt-7">
        <Button value="Back to Explore!" link="/explore" />
      </div>
    </div>
  );
};

export default UpdatePlace;
