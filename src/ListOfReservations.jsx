import { useEffect, useState } from "react";
import httpModule from "./axios";

const ListOfReservations = () => {
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    httpModule
      .get("")
      .then((res) => setReservations(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {reservations.map((reservation) => (
        <div className="pb-4">
          <div>Name: {reservation.name}</div>
          <div>Class: {reservation.classType}</div>
          <div>Time: {reservation.time}</div>
          <div>Date: {reservation.date}</div>
          <div className="flex flex-row gap-x-2">
            <button>Update</button>
            <button>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListOfReservations;
