import { useParams } from "react-router-dom";
import placeServices from "../services/place.service";
import { useEffect, useState } from "react";

const PlaceDetail = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    placeServices.getPlaceById(id, (data) => {
      setPlace(data);
      console.log(data);
    });
  }, []);

  if (!place) {
    return <div>Not Found</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="p-3 bg-white w-5/6 md:w-4/6 rounded-md my-5">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-yellow-500 to-orange-600 flex justify-center ">
          {place.name}
        </h2>
        <div className="flex justify-center mt-4">
          <img
            src={place.img}
            alt=""
            className="md:w-1/2 md:h-1/2 rounded-md"
          />
        </div>
        <p className="text-black m-2">
          <span className="font-bold">Category: </span>
          <a className="text-orange-500 font-semibold hover:underline ml-2" href="/explore">
            {place.category}
          </a>
        </p>
        <p className="text-black m-2">
          <span className="font-bold">Location: </span> {place.address}
        </p>
        <p className="m-2">
          <span className="font-bold text-black">Rating: </span>{" "}
          <span className="text-pink-500 font-semibold">{place.rating}</span>
        </p>
        <p className="m-2">
          <span className="font-bold text-black">Contact: </span>{" "}
          <span className="text-orange-500 font-semibold">{place.contact}</span>
        </p>
        <p className="text-black m-2">
          {place.desc} <br /> Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Delectus rem soluta, officia esse inventore sit atque labore
          deserunt consequatur nihil explicabo praesentium ex commodi excepturi
          optio blanditiis hic expedita aspernatur ducimus dicta quae culpa
          facilis minus. Vel aliquam, aliquid ipsum eveniet qui architecto
          quidem dicta maxime cum quas animi enim labore! <br /> Quasi autem
          esse sit ipsa ipsam, labore cupiditate aliquam explicabo, nam dicta
          architecto vero dolores debitis tenetur cumque reprehenderit omnis
          nostrum dolore consequatur pariatur molestias? Qui, repellat? Aliquid
          unde, fuga asperiores adipisci sequi accusamus voluptatibus ducimus ex
          ab explicabo, iure temporibus ea libero impedit. Deleniti in
          voluptatem dolor reiciendis.
        </p>
        <div className="flex justify-center">
          <h2 className="text-2xl font-bold m-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
            Menu
          </h2>
        </div>
        <div className="flex justify-center">
          <table className="table w-5/6">
            <thead>
              <tr className="text-black flex justify-evenly text-lg">
                <th>Foods</th>
                <th>Drinks</th>
                <th>Desserts</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-black flex justify-evenly">
                <td>
                  <img
                    src="https://source.unsplash.com/200x200?foods"
                    alt=""
                    className="rounded-lg"
                  />
                </td>
                <td>
                  <img
                    src="https://source.unsplash.com/200x200?drink"
                    alt=""
                    className="rounded-lg"
                  />
                </td>
                <td>
                  <img
                    src="https://source.unsplash.com/200x200?desserts"
                    alt=""
                    className="rounded-lg"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56401215233!2d107.5605825536277!3d-6.903442349701924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1702518762893!5m2!1sen!2sid"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
          title="map"
        ></iframe>
      </div>
    </div>
  );
};

export default PlaceDetail;
