import React from "react";

const Pizza = ({ pizza }) => {
  return (
    <div>
      <h1>{pizza.name}</h1>
      <img
        src={pizza.image}
        alt={pizza.name}
        className="img-fluid"
        style={{ height: "200px", width: "200px" }}
      />
      <div className="flex-container">
        <div className="w-100">
          <p>Variants</p>
          <select>
            {pizza.varients.map((varient) => (
              <option value={varient}>{varient}</option>
            ))}
          </select>
        </div>
        <div className="w-100">
          <p>Quantity</p>
          <select>
            {[...Array(10).keys()].map((x, i) => (
              <option value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
