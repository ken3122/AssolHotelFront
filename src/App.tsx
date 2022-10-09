import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const rooms = [
  {title: 'Комната на первом этаже', isEmpty: true, id: 1},
  {title: 'Комната на втором этаже', isEmpty: false, id: 2},
  {title: 'Комната на третьем этаже', isEmpty: true, id: 3}
];

function RoomList() {
  const listRooms = rooms.map(room =>
    <li
      key={room.id}
      style={{
        color: room.isEmpty ? 'red' : 'darkgreen'
      }}
    >
      {room.title}
      </li>
    );

  return (
    <ul>{listRooms}</ul>
  );
}

function DatePicker() {
  return (
    <div  className='flex-container'>
      <div className='item'>
        <label>c</label>
        <input  type="date" value="2022-09-17"/>
      </div>
      <div className='item'>
        <label>до</label>
        <input  type="date" value="2022-09-24"/>
      </div>      
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Добро пожаловать!</h1>
      <DatePicker />
      <button>Найти свободный номер</button>
    </div>
  )
}

export default App
