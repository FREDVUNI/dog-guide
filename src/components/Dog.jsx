import React from "react";

const Dog = ({ dog }) => {
  return (
    <div id="result">
      <div className="info">
        <img
          src={`https://cdn2.thedogapi.com/images/${dog?.reference_image_id}_1280.jpg`}
          className="poster"
          alt={dog?.name}
        />
        <div>
          <h2>{dog?.name}</h2>
          <p className="details">Temperament: {dog?.temperament}</p>
          <p className="details">Origin: {dog?.origin}</p>
          <div className="breed">
            <div>Weight (imperial): {dog?.weight.imperial}</div>
            <div>Height (imperial): {dog?.height.imperial}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dog;
