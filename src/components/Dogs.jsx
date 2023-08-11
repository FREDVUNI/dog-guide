import React from "react";
import { useEffect, useState } from "react";
import Dog from "./Dog";

const Dogs = () => {
  const [dogBreed, setdogBreed] = useState("");
  const [dogData, setDogData] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${dogBreed}`
      );
      const data = await response.json();
      setDogData(data);
    } catch (error) {
      console.error("Error fetching dog data:", error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          id="dog-name"
          placeholder="Enter dog name here..."
          onChange={(e) => setdogBreed(e.target.value)}
        />
        <button id="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      {dogData.map((dog) => (
        <Dog key={dog.id} dog={dog} />
      ))}
    </div>
  );
};

export default Dogs;
