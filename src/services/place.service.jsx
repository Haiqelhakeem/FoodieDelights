import axios from "axios";

export const getPlaces = async (callback) => {
    axios
      .get("http://127.0.0.1:3000/places", {
      // .get("https://foodiedelights.p3mcfab.mongodb.net/places",{
        headers: {
          "Content-Type": "application/json",
          // 'Authorization': 'Bearer EYoKU3bq9yDdWt3WdJRbkS4tAQYpk3mafb3zoxtOHds3ZyZXHqf8ZoJRyO2afx6n',
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
