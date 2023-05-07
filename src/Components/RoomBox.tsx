import React from "react";
import Img from "../images/room1.jpg";

export const RoomBox = ({ apartment }) => {
  return (
    <div className="box-flex-container">
      <img src={Img} alt="image" style={{ width: "100%" }} />
      <h1>{apartment.name}</h1>
      <ul style={{ width: "20%" }}>
        {/* <li>{apartment.description}</li> */}
        <li>{apartment.pricePerNight}</li>
      </ul>
      <button style={{ alignSelf: "self-end" }}>Подробнее</button>
    </div>
  );
};
