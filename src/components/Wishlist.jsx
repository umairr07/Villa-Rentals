import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { FaHeart } from "react-icons/fa";

function Wishlist() {
  const location = useLocation();
  const initialHeartArray = location.state || [];
  const [heartArray, setHeartArray] = useState(initialHeartArray);

  const handleDelete = (id) => {
    const deleteFilter = heartArray.filter((prop) => {
      return id !== prop.address;
    });

    setHeartArray(deleteFilter);
  };

  return (
    <div>
      <Navbar />

      <div className="flex flex-wrap justify-center gap-14 mt-10">
        {heartArray.length > 0 ? (
          heartArray.map((property, index) => (
            <div
              key={property.id}
              className="bg-[#fff] border-2 w-[350px] rounded-xl"
            >
              <img
                src={property.imgurl}
                alt=""
                className="w-[350px] h-[250px]"
              />
              <div className="p-2">
                <div className="flex justify-between">
                  <p className="flex items-center">
                    <span className="text-[#604CC3] text-xl font-bold">
                      ${property.price}
                    </span>
                    <span>/month</span>
                  </p>
                  {/* <button onClick={() => handleHeart(property)}>
                  {isLiked ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart />
                  )}
                </button> */}
                  <button onClick={() => handleDelete(property.address)}>
                    <FaHeart className="text-red-500 text-xl" />
                  </button>
                </div>
                <p>{property.title}</p>
                <p>{property.type}</p>
                <p className="mb-2">{property.address}</p>
                <hr />
              </div>
            </div>
          ))
        ) : (
          <p className="text-red-500 text-2xl font-bold mt-5">
            No properties in the wishlist.
          </p>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
