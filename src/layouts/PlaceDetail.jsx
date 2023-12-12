import { useParams } from "react-router-dom";
import { getPlaceById } from "../services/place.service";
import { useEffect, useState } from "react";

const PlaceDetail = () => {
    const { id } = useParams();
    const [place, setPlace] = useState(null);
  
    useEffect(() => {
      fetchData();
    }, [id]);
  
    const fetchData = async () => {
      try {
        const data = await getPlaceById(id);
        setPlace(data);
      } catch (error) {
        console.error("Error fetching place details:", error);
      }
    };
  
    if (!place) {
      return <div>Loading...</div>;
    }

  return (
    <div>
      <h2>{place.name}</h2>
      <p>{place.desc}</p>
      <p>Category: {place.category}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default PlaceDetail;
