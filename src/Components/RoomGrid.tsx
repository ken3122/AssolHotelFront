import React from "react";
import { RoomBox } from "./RoomBox";
import room1 from "../images/room1.jpg";

export const RoomGrid = ({ apartments }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "16px",
        margin: "10px",
      }}
    >
      {apartments.map((apartment) => {
        return <RoomBox apartment={apartment} />;
      })}
    </div>
  );
};
