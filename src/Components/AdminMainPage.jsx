import { useEffect, useState } from "React";
import { MyNavbar } from "./MyNavbar";
import { AdminRoomGrid } from "./AdminRoomGrid";
import { AddNewApartment } from "./AddNewApartment";
import "./App.css";

import Axios from "axios";

export const AdminMainPage = () => {
  const [apartments, setApartments] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const url = "http://localhost:3000/apartments";

  useEffect(() => {
    getAllApartments();
  }, []);

  const handleApartmentAndStatus = (newApartments, newStatuses) => {
    setApartments(newApartments);
    setStatuses(newStatuses);
  };

  const handleStatuses = (newStatuses) => {
    setStatuses(newStatuses);
  };

  const handleApartments = (newApartments) => {
    setApartments(newApartments);
  };

  const getAllApartments = () => {
    Axios.get(url)
      .then((response) => {
        const allApartments = response.data;

        setApartments(allApartments);
        const newStatuses = allApartments.map((a) => false);
        setStatuses(newStatuses);
        // console.log("Apartments", localStatuses);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div>
      <MyNavbar />
      <AdminRoomGrid
        apartments={apartments}
        statuses={statuses}
        onChangeStatuses={handleStatuses}
        onDeleteApartment={handleApartments}
      />
      <div className="mainButton">
        <AddNewApartment
          value={apartments}
          onChangeValue={handleApartmentAndStatus}
          statusValue={statuses}
        />
      </div>
    </div>
  );
};
