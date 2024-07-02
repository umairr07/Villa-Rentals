import { properties } from "../propertiesData/data.js";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import "./Hero.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LiaBedSolid } from "react-icons/lia";
import { LuBath } from "react-icons/lu";
import { GoDiamond } from "react-icons/go";
import { MdCurrencyRupee } from "react-icons/md";

function Hero() {
  const [allProperties, setAllProperties] = useState(properties);
  const [priceFilter, setPriceFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [newProperty, setNewProperty] = useState(properties);
  const [heartArray, setHeartArray] = useState([]);

  const navigate = useNavigate();

  const handleFilteration = () => {
    let filtered = allProperties;

    if (priceFilter) {
      const splitArray = priceFilter.split("-");
      const convertToNumberLeft = Number(splitArray[0]);
      const convertToNumberRight = Number(splitArray[1]);

      filtered = filtered.filter((prop) => {
        return (
          prop.price >= convertToNumberLeft &&
          prop.price <= convertToNumberRight
        );
      });
    }

    if (typeFilter) {
      filtered = filtered.filter((prop) => {
        return prop.type === typeFilter;
      });
    }

    if (inputValue) {
      filtered = filtered.filter((prop) => {
        return prop.address.toLowerCase().includes(inputValue.toLowerCase());
      });
    }

    setNewProperty(filtered);
  };

  const handleHeart = (property) => {
    if (heartArray.includes(property)) {
      setHeartArray(heartArray.filter((item) => item !== property));
    } else {
      setHeartArray([...heartArray, property]);
    }
    console.log(heartArray);
  };

  return (
    <div>
      <div className="lg:flex lg:flex-row lg:justify-between w-[80%] m-auto lg:items-center sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-10 mt-5">
        <h1 className="lg:text-4xl lg:font-bold sm:text-xl sm:font-semibold">
          Search Properties to Rent
        </h1>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUVTGLqdaMFuYl5u9T8pWN9vCndMErgsXXA&s"
          alt=""
          className="lg:w-[60px] cursor-pointer rounded-lg sm:w-[40px]"
          onClick={() => navigate("/wishlist", { state: heartArray })}
        />
      </div>

      <div className="lg:flex lg:flex-row justify-around items-center m-auto w-[80%] mt-5 py-5 bg-[#fff] rounded-xl shadow-lg sm:flex sm:flex-col sm:gap-5 ">
        <div>
          <input
            type="text"
            placeholder="Select Location"
            className="p-2 outline-none rounded-lg lg:w-[300px] bg-[#F8F7FD] sm:w-[300px]"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        <div>
          <input
            type="date"
            name=""
            id=""
            className="p-2 lg:w-[150px] bg-[#F8F7FD] sm:w-[250px]"
          />
        </div>

        <div>
          <select
            name="prices"
            id=""
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="lg:w-[150px] p-2 bg-[#F8F7FD] sm:w-[250px]"
          >
            <option value="prices">Select Prices</option>
            <option value="0-3000">Rs 0-3000</option>
            <option value="0-500">Rs 0-500</option>
            <option value="500-1000">Rs 500-1000</option>
            <option value="1000-1500">Rs 1000-1500</option>
            <option value="1500-2000">Rs 1500-2000</option>
            <option value="2000-2500">Rs 2000-2500</option>
            <option value="2500-3000">Rs 2500-3000</option>
          </select>
        </div>

        <div>
          <select
            name="type"
            id=""
            onChange={(e) => setTypeFilter(e.target.value)}
            className="lg:w-[150px] p-2 bg-[#F8F7FD] sm:w-[250px]"
          >
            <option value="types">Select Type</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
            <option value="farm-house">Farm House</option>
            <option value="outdoor">Outdoor</option>
          </select>
        </div>

        <button
          onClick={handleFilteration}
          className="px-2 py-2 w-[100px] bg-[#604CC3] text-white rounded-lg"
        >
          Submit
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-14 mt-10">
        {newProperty.length > 0 ? (
          newProperty.map((property) => {
            const isLiked = heartArray.includes(property);

            return (
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
                      <MdCurrencyRupee className="text-xl text-[#604CC3] font-bold" />
                      <span className="text-[#604CC3] text-xl font-bold">
                        {property.price}
                      </span>
                      <span>/day</span>
                    </p>
                    <button onClick={() => handleHeart(property)}>
                      {isLiked ? (
                        <FaHeart className="text-red-500 text-xl" />
                      ) : (
                        <FaRegHeart className="text-xl" />
                      )}
                    </button>
                  </div>
                  <p>{property.title}</p>
                  <p className="mb-2">{property.address}</p>
                  <hr />
                  <div className="flex justify-between mt-2">
                    <div className="flex items-center gap-1">
                      <LiaBedSolid />
                      <>{property.beds} Beds</>
                    </div>

                    <div className="flex items-center gap-1">
                      <LuBath />
                      <p>{property.bath} Bath</p>
                    </div>

                    <div className="flex items-center gap-1">
                      <GoDiamond />
                      <p>{property.sqft}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-red-500 text-2xl font-bold mt-5">
            Oops!!! No Property Found
          </p>
        )}
      </div>
    </div>
  );
}

export default Hero;
