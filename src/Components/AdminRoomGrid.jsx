import React from "React";
import { AdminRoomBox } from "./AdminRoomBox";

export const AdminRoomGrid = ({
  apartments,
  statuses,
  onChangeStatuses,
  onDeleteApartment,
}) => {
  return (
    //
    // <div className="flex flex-rows-4 flex-wrap pl-5 pr-5 mt-5 gap-x-8 gap-y-8 justify-center flex-start flex-col">
    <div className="grid grid-cols-4 mt-5 gap-x-8 gap-y-8">
      {apartments.map((apartment) => {
        return (
          <AdminRoomBox
            key={apartment.id}
            apartment={apartment}
            statuses={statuses}
            onChangeStatuses={onChangeStatuses}
            apartments={apartments}
            onDeleteApartment={onDeleteApartment}
          />
        );
      })}
    </div>
  );
};
