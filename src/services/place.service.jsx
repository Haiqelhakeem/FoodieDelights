import axios from "axios";

export const getPlaces = async (callback) => {
    await axios
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

  export const getPlaceById = async (id) => {
    // Implement your logic to fetch a place by ID from your API or database
    // Example using placeholder data
    const response = await fetch(`/api/places/${id}`);
    const data = await response.json();
    return data;
  };
