import { useState } from "react";
import "./App.css";
import Img from "./images/room1.jpg";
import { Routes, Route, Link, useLocation } from "react-router-dom";

const rooms = [
  { title: "Комната на первом этаже", isEmpty: true, id: 1 },
  { title: "Комната на втором этаже", isEmpty: false, id: 2 },
  { title: "Комната на третьем этаже", isEmpty: true, id: 3 },
];

function RoomList() {
  const listRooms = rooms.map((room) => (
    <li
      key={room.id}
      style={{
        color: room.isEmpty ? "red" : "darkgreen",
      }}
    >
      {room.title}
    </li>
  ));

  return <ul>{listRooms}</ul>;
}

function RoomBox() {
  return (
    <div className="box-flex-container">
      <img src={Img} alt="image" style={{ width: "100%" }} />
      <h1>Номер на первом этаже</h1>
      <ul style={{ width: "20%" }}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <button style={{ alignSelf: "self-end" }}>Подробнее</button>
    </div>
  );
}

function RoomGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "16px",
        margin: "10px",
      }}
    >
      <RoomBox />
      <RoomBox />
      <RoomBox />
    </div>
  );
}

function DatePicker() {
  const [startDate, setStartDate] = useState("2022-09-17");
  const [endDate, setEndDate] = useState("2022-09-17");

  function handleStartDate(e: React.ChangeEvent<HTMLInputElement>) {
    setStartDate(e.target.value);
  }

  function handleEndDate(e: React.ChangeEvent<HTMLInputElement>) {
    setEndDate(e.target.value);
  }

  return (
    <div className="flex-container">
      <div className="item">
        <label>c</label>
        <input
          type="date"
          onChange={handleStartDate}
          defaultValue="2022-09-17"
        />
      </div>
      <div className="item">
        <label>до</label>
        <input type="date" onChange={handleEndDate} defaultValue="2022-09-17" />
      </div>
      <p>
        Выбранные даты: c {startDate} по {endDate}
      </p>
      <Link to="MainPage" className="link">
        <button>Найти свободный номер</button>
      </Link>
    </div>
  );
}

function MyNavbar() {
  return (
    <div className="navbar-flex-container">
      <div className="logo">Гостевой дом Ассоль</div>
      <ul>
        <li>
          <a href="#home">Главная</a>
        </li>
        <li>
          <a href="#pricing">Контакты</a>
        </li>
        <li>
          <a href="#pricing">Расположение</a>
        </li>
      </ul>
    </div>
  );
}

function MainPage() {
  const location = useLocation();
  const startDate = location.state;
  const endDate = location.state;
  console.log(startDate - endDate);
  return (
    <div>
      <MyNavbar />
      <RoomGrid />
    </div>
  );
}

function App() {
  const [startDate, setStartDate] = useState("2022-09-17");
  const [endDate, setEndDate] = useState("2022-09-17");

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<DatePicker />}></Route>
        <Route
          path="/MainPage"
          render={(props) => (
            <MainPage
              {...props}
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
            />
          )}
          element={<MainPage />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
