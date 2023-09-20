import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { DatePicker } from "./DatePicker";
import { MyNavbar } from "./MyNavbar";
import { RoomGrid } from "./RoomGrid";
import { MainPage } from "./MainPage";
import { AdminMainPage } from "./AdminMainPage";
import "./App.css";
import Axios from "axios";

function App() {
  const [startDate, setStartDate] = useState("2022-09-17");
  const [endDate, setEndDate] = useState("2022-09-17");
  const [apartments, getApartments] = useState([]);
  const url = "http://localhost:3000/apartments";

  useEffect(() => {
    getAllApartments();
  }, []);

  const getAllApartments = () => {
    Axios.get(url)
      .then((response) => {
        const allApartments = response.data;

        getApartments(allApartments);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<DatePicker />} />
        <Route
          path="/MainPage"
          element={<MainPage apartments={apartments} />}
        />
        <Route path="/AdminMainPage" element={<AdminMainPage />} />
      </Routes>
    </div>
  );
}

export default App;
