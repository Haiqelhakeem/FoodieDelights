import axios from "axios";

export const getPlaces = async (callback) => {
    axios
      .get("http://127.0.0.1:3000/places", {
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
