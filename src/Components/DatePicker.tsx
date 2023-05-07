import React, { useState } from "react";
import "./App.css";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function DatePicker() {
  const [startDate, setStartDate] = useState("2022-09-17");
  const [endDate, setEndDate] = useState("2022-09-17");

  function handleStartDate(
    e: React.ChangeEvent<HTMLInputElement> /*TypeScript target property defined */
  ) {
    setStartDate(e.target.value);
  }

  function handleEndDate(
    e: React.ChangeEvent<HTMLInputElement> /*TypeScript target property defined */
  ) {
    setEndDate(e.target.value);
  }

  return (
    <div className="header">
      <div className="flex-container">
        <div className="item">
          <label className="label">c</label>
          <input
            type="date"
            onChange={handleStartDate}
            defaultValue="2022-09-17"
          />
        </div>
        <div className="item">
          <label className="label">до</label>
          <input
            type="date"
            onChange={handleEndDate}
            defaultValue="2022-09-17"
          />
        </div>
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

        <Link to="MainPage" className="link" state={[startDate, endDate]}>
          <Button size="sm" className="search-button">
            {" "}
            Найти свободный номер
          </Button>
        </Link>
      </div>
    </div>
  );
}
export default DatePicker;
