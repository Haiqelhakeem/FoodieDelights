import axios from "axios";

export const getPlaces = async (callback) => {
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

  export const getPlaceById = async (id, callback) => {
    // Implement your logic to fetch a place by ID from your API or database
    // Example using placeholder data
    await axios.get(`https://foodie-delights-api.vercel.app/places/${id}`).then((res) => {
      console.log(res.data);
      callback(res.data);
    }).catch((err) => {
      console.log(err);
    })
  };
