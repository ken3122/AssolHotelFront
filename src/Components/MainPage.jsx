import React, { useState } from "React";
import "./App.css";
import { MyNavbar } from "./MyNavbar";
import { RoomGrid } from "./RoomGrid";
import { useLocation } from "react-router-dom";

export const MainPage = ({ apartments }) => {
  const { state } = useLocation();
  const [startDate, endDate] = state;
  console.log(startDate, endDate);
  console.log(apartments);
  return (
    <div>
      <MyNavbar />
      <p className="date-selected">
        Выбранные даты: c{" "}
        <b>
          <u>{startDate}</u>
        </b>{" "}
        по{" "}
        <b>
          <u>{endDate}</u>
        </b>
      </p>
      <RoomGrid apartments={apartments} />
    </div>
  );
};
