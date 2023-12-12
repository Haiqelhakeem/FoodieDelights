import axios from "axios";

export const getPlaces = async (callback) => {
  // const params = {};

  // if (selectedCategories.length > 0) {
  //   params.categories = selectedCategories.join(',');
  // }
    axios
      .get("http://127.0.0.1:3000/places", {
      // .get("mongodb+srv://haiqelhakeem:haiqelanimax1571@foodiedelights.p3mcfab.mongodb.net/places",{
        headers: {
          "Content-Type": "application/json",
          // 'Authorization': 'Bearer EYoKU3bq9yDdWt3WdJRbkS4tAQYpk3mafb3zoxtOHds3ZyZXHqf8ZoJRyO2afx6n',
        },
        // params,
      }) 
      .then((res) => {
        console.log(res.data);
        callback(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
