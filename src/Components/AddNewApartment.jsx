import React from "React";
import { Button } from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/outline";

export const AddNewApartment = ({ value, onChangeValue, statusValue }) => {
  function generateUniqueInt(existingList) {
    let uniqueInt = Math.floor(Math.random() * 100000); // Generate a random integer

    // Check if the generated integer already exists in the list
    while (existingList.includes(uniqueInt)) {
      uniqueInt = Math.floor(Math.random() * 100000); // Generate another random integer
    }

    return uniqueInt;
  }

  function createIndexList(value) {
    return value.map((obj) => obj.id);
  }

  const handleButtonClick = () => {
    const newApart = {
      description: "",
      id: generateUniqueInt(createIndexList(value)),
      name: "",
      pricePerNight: 0,
      isLocal: true,
    };
    console.log("newapart", newApart);
    const newApartList = [...value, newApart];
    // console.log(statusValue);
    const newStatus = [...statusValue, true];
    // console.log(newStatus);
    onChangeValue(newApartList, newStatus);
  };

  return (
    <div className="flex content-center align-center">
      <Button
        className="content-center"
        fullWidth
        variant="standard"
        size="lg"
        onClick={handleButtonClick}
      >
        <PlusIcon strokeWidth={4} className=" h-8 w-8" />
        <p className=" h-8 w-8"> Add New </p>
      </Button>
    </div>
  );
};
