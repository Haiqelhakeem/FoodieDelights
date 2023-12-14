import axios from "axios";

const Localhost = "http://localhost";

const getPlaces = async (callback) => {
  await axios
    .get("https://foodie-delights-api.vercel.app/places", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res.data);
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getPlaceById = async (id, callback) => {
  // Implement your logic to fetch a place by ID from your API or database
  // Example using placeholder data
  await axios
    .get(`https://foodie-delights-api.vercel.app/places/${id}`)
    .then((res) => {
      console.log(res.data);
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createPlace = async (data, callback) => {
  await axios
    .post("https://foodie-delights-api.vercel.app/places", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res.data);
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default { getPlaces, getPlaceById, createPlace };
