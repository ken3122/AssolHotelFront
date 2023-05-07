import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { DatePicker } from "./DatePicker";
import { MyNavbar } from "./MyNavbar";
import { RoomGrid } from "./RoomGrid";
import { MainPage } from "./MainPage";
import "./App.css";
import Axios from "axios";

import { Button } from "@material-tailwind/react";

const rooms = [
  { title: "Комната на первом этаже", isEmpty: true, id: 1 },
  { title: "Комната на втором этаже", isEmpty: false, id: 2 },
  { title: "Комната на третьем этаже", isEmpty: true, id: 3 },
];

// function RoomList() {
//   const listRooms = rooms.map((room) => (
//     <li
//       key={room.id}
//       style={{
//         color: room.isEmpty ? "red" : "darkgreen",
//       }}
//     >
//       {room.title}
//     </li>
//   ));

//   return <ul>{listRooms}</ul>;
// }

// export function Parent() {
//   const [apartments, getApartments] = useState([]);
//   const url = "http://localhost:3000/apartments";

//   useEffect(() => {
//     getAllApartments();
//   }, []);

//   const getAllApartments = () => {
//     Axios.get("${url}apartments")
//       .then((response) => {
//         const allApartments = response.data.apartments.AllApartments;

//         getApartments(allApartments);
//       })
//       .catch((error) => console.error("Error: ${error}"));
//   };
//   return <MainPage apartments={apartments} />;
// }

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
      </Routes>
    </div>
  );
}

export default App;
