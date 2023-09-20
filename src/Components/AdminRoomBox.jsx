import react, { useEffect, useState } from "React";
// import { AddNewApartment } from "./AddNewApartment";
import Img from "../images/room1.jpg";
import axios from "axios";

import {
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import {
  PencilIcon,
  TrashIcon,
  CheckIcon,
  CloudArrowUpIcon,
} from "@heroicons/react/24/outline";

export const AdminRoomBox = ({
  apartment,
  statuses,
  onChangeStatuses,
  apartments,
  onDeleteApartment,
}) => {
  const [editText, setEditText] = useState(false);
  const [apart, setApartment] = useState(apartment);
  // const [local, setLocal] = useState(statuses);
  // console.log(local);
  // const [description, setDescription] = useState();

  const ApartChange = (apart, newName) => {
    return {
      ...apart,
      name: newName,
    };
  };

  const DescriptionChange = (apart, newDescription) => {
    return {
      ...apart,
      description: newDescription,
    };
  };

  const statusesChange = (local, apart) => {
    return {
      ...local,
      [apart.id]: false,
    };
  };

  const apartmentsChange = (oldApart, newApart, apartments) => {
    const updatedList = apartments.map((a) => {
      if (oldApart.id === a.id) {
        return newApart;
      }
      return a;
    });
    return updatedList;
  };

  const ApartmentDeleteChange = (apartments, apart) => {
    console.log("input", apartments, apart);
    const result = apartments.filter((apartment) => apartment.id !== apart.id);
    console.log("result", result);
    return result;
  };

  const handleButtonClick = (editText) => {
    {
      editText
        ? apart.isLocal
          ? setEditText(!editText)
          : axios
              .patch("http://localhost:3000/apartments/" + apart.id, apart)
              .then((response) => {
                // Handle successful response
                console.log(response.data);
                setApartment(response.data);
                setEditText(!editText);
                console.log(editText); // Update component state if needed
              })
              .catch((error) => {
                // Handle error
                console.error(error);
              })
        : setEditText(!editText);
    }
  };

  const handleStatusButtonClick = (onChangeStatuses) => {
    axios
      .post("http://localhost:3000/apartments/", apart)
      .then((response) => {
        // Handle successful response
        console.log("handleStatus", response.data);
        console.log("handleStatus", apartments);
        onDeleteApartment(apartmentsChange(apart, response.data, apartments));
        setApartment(response.data);
        onChangeStatuses(statusesChange(statuses, apart));
        console.log("handleStatus", apartments);
        console.log(editText); // Update component state if needed
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  const handleDeleteClick = (onDeleteApartment) => {
    apart.isLocal
      ? onDeleteApartment(ApartmentDeleteChange(apartments, apart))
      : axios
          .delete("http://localhost:3000/apartments/" + apart.id, apart)
          .then((response) => {
            // Handle successful response
            console.log("delete", response.data, apart);
            onDeleteApartment(ApartmentDeleteChange(apartments, response.data));
            console.log(apartments); // Update component state if needed
          })
          .catch((error) => {
            // Handle error
            console.error(error);
          });
  };

  return (
    <Card className="max-w-[24rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img src={Img} alt="AssolHotelNightView" />
      </CardHeader>

      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {editText ? (
              <Input
                variant="standard"
                label="Change Name"
                type="text"
                value={apart.name}
                onChange={(e) =>
                  setApartment(ApartChange(apart, e.target.value))
                }
              />
            ) : (
              apart.name
            )}
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1 font-normal"
          ></Typography>
        </div>
        <div className="mb-3 flex items-center justify-between">
          <Typography color="gray">
            {editText ? (
              <Input
                variant="standard"
                size="lg"
                label="Change Description"
                type="text"
                value={apart.description}
                onChange={(e) =>
                  setApartment(DescriptionChange(apart, e.target.value))
                }
              />
            ) : (
              apart.description
            )}
          </Typography>
        </div>
      </CardBody>

      <div className="">
        <CardFooter className="space-y-2 pt-3">
          <Button
            className="flex items-center gap-3"
            size="lg"
            color={editText ? "green" : "blue"}
            fullWidth={true}
            onClick={() => handleButtonClick(editText)}
          >
            {editText ? (
              <>
                <CheckIcon strokeWidth={2} className="h-85 w-5" />
                Save
              </>
            ) : (
              <>
                <PencilIcon strokeWidth={2} className="h-85 w-5" />
                Edit
              </>
            )}
          </Button>
          <Button
            className="flex items-center gap-3"
            size="lg"
            color="red"
            fullWidth={true}
            onClick={() => handleDeleteClick(onDeleteApartment)}
          >
            <TrashIcon strokeWidth={2} className="h-5 w-5" />
            Delete
          </Button>
          {console.log(statuses, apart.id)}
          {apart.isLocal && (
            <Button
              className="flex items-center justify-center gap-3"
              size="lg"
              color="amber"
              fullWidth={true}
              onClick={() => handleStatusButtonClick({ onChangeStatuses })}
            >
              {/* <CloudArrowUpIcon strokeWidth={2} className="h-5 w-5" /> */}
              Upload
            </Button>
          )}
        </CardFooter>
      </div>
    </Card>
  );
};
