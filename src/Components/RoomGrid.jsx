import React from "React";
import { RoomBox } from "./RoomBox";

export const RoomGrid = ({ apartments }) => {
  return (
    <div className="flex flex-rows-4 flex-wrap pl-5 pr-5 mt-5 gap-x-8 gap-y-8 justify-center">
      {apartments.map((apartment) => {
        return <RoomBox key={apartment.id} apartment={apartment} />;
      })}
    </div>
  );
};
