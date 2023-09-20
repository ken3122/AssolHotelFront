import React from "react";
import Img from "../images/room1.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export const RoomBox = ({ apartment }) => {
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
            {apartment.name}
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1 font-normal"
          ></Typography>
        </div>
        <Typography color="gray">{apartment.description}</Typography>
      </CardBody>

      <CardFooter className="pt-3">
        <Button size="lg" fullWidth={true}>
          Rent
        </Button>
      </CardFooter>
    </Card>
  );
};
